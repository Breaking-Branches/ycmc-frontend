import { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import extensionIcon from '../../helper/extensionIcon'
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai'
import { Change } from '../../redux/actions/filesInfoFetchAction'
export default function FileInfo(props) {

  const [acc, setAcc] = useState(true);
  const dispatch = useDispatch()
  const filesInfo = useSelector((state) => state.filesInfoReducer)[props.reponame][props.extension];
  const demoData = (() => { const d = []; for (const i of filesInfo) { d.push({ 'name': i }) }; return d })()
  const [files,setFiles] = useState(demoData);
  const [fileNo,setFileNo] = useState(filesInfo.length)
  const { name, icon } = extensionIcon(props.extension)
  const handleChange = (e) => {
    const {name,checked} = e.target
    if(name==='selectall'){
      setFileNo(fileNo)
      const tempFile = files.map((file)=>{

        return {...file,isChecked:checked}
      })
      setFiles(tempFile)
    }
    else{
    const tempFile = files.map(
      (file)=>{
        if (file.name===name){
          return {...file,isChecked:checked}
        }
        return file
      }
      )
      setFiles(tempFile)
    }
  
    }
    useEffect(()=>{
      const arr = []
      files.map((file)=>{
       if(file.isChecked){
         arr.push(file.name)
       }
       return file
     })
     dispatch(Change([props.reponame,props.extension,arr]))
    },[files,dispatch,props.reponame,props.extension])


  return (
    <div className={`mt-5 shadow-lg  transition-all   overflow-hidden border`}>

      <div onClick={() => { setAcc(!acc) }} className='p-4  cursor-pointer flex flex-col justify-between  rounded bg-gray-100'>
        <div>
          <div className='flex items-center'>
            {acc ?
              <AiOutlineRight className='mr-3' />
              :
              <AiOutlineDown className='mr-3' />
            }
            <span className='flex rounded-lg items-center bg-gray-200 px-2 py-1 text-base'> {icon} {fileNo}</span>
            <h2 className='text-lg ml-5'>{name} Files</h2>
          </div>
        </div>
      </div>
      <div className={`  ${acc ? 'max-h-0' : 'max-h-max p-4'} transition-all`}>

        <div className='flex justify-between border-b-2 mb-6 border-gray-300'>
          <div>
            <label>Select All</label>
            <input type="checkbox" checked={!files.some((file) => file?.isChecked !== true)} onChange={handleChange} className='w-[19px] ml-3' name="selectall" id="" />
          </div>
        </div>

        {
          files.map(file => {
            return (
              <div className='flex mb-5' key={Math.random()}>
                <input type="checkbox"
    
                  onChange={handleChange}
                  checked={file.isChecked ? true : false}
                  className='w-[19px] mr-7' name={file.name} id="" />
                <p>{file.name}</p>
              </div>

            )

          })
        }

      </div>
    </div>
  )
}
