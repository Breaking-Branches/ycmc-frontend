import {useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import extensionIcon from '../../helper/extensionIcon'
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai'
import {updateFiles} from '../../redux/actions/selectedFileInfoAction'
export default function FileInfo(props) {
  const [acc, setAcc] = useState(true);
  const dispatch = useDispatch()
  const filesInfo = useSelector((state) => state.filesInfoReducer)[props.reponame][props.extension];
  const { name, icon } = extensionIcon(props.extension)
  const [selectedFiles,setSelectedFiles] = useState([])

  const handleChange = (e)=>{
    const {name,checked} = e.target;
    if(name==="selectall"){
      setSelectedFiles(checked ? filesInfo : []);
      return 1;
    }

    setSelectedFiles(prevState => {
      if (checked) {
        return [...prevState, name];
      } else {
        return prevState.filter(file => file !== name);
      }
    });
  }
  useEffect(()=>{
    dispatch(updateFiles([props.reponame,props.extension,selectedFiles]))
    console.log('useEffect')
  },[selectedFiles,dispatch,props.reponame,props.extension])

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
            <span className='flex rounded-lg items-center bg-gray-200 px-2 py-1 text-base'> {icon} {filesInfo.length}</span>
            <h2 className='text-lg ml-5'>{name} Files</h2>
          </div>
        </div>
      </div>
      <div className={`  ${acc ? 'max-h-0' : 'max-h-max p-4'} transition-all`}>

        <div className='flex justify-between border-b-2 mb-6 border-gray-300'>
          <div>
            <label>Select All</label>
            <input type="checkbox" className='w-[19px] ml-3' checked={
              JSON.stringify(selectedFiles.sort())
              ===
              JSON.stringify(filesInfo.sort()) ? true : false
            } onChange={handleChange} name="selectall" id="" />
          </div>
        </div>

        {
          filesInfo.map(file => {
            return (
              <div className='flex mb-5' key={Math.random()}>
                <input type="checkbox"
                checked= {selectedFiles.includes(file)}
                  onChange={handleChange}
                  className='w-[19px] mr-7' name={file} id="" />
                <p>{file}</p>
              </div>

            )

          })
        }

      </div>
    </div>
  )
}
