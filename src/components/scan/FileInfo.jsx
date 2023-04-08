import {useState,useEffect} from 'react'
import { FaPython } from 'react-icons/fa'
// import { TbBrandGolang } from 'react-icons/tb'
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai'
export default function FileInfo() {
  
  const [acc,setAcc] = useState(true);
  const [files,setFiles] = useState([{'name':'main.py'},{'name':'work/main.py'}])

  useEffect(()=>{
    //
  },[files])
  
  const handleChange = (e)=>{
    const {checked,name} = e.target
    if(name==='selectall'){
      const tempUser = 
      files.map(file=>{
        return {...file,isChecked:checked}
      })
      setFiles(tempUser);
    }
    else{
      const tempUser = 
      files.map(file=>{
        if(file.name===name){
          return {...file,isChecked:checked}
        }
        return file
        
      })
      setFiles(tempUser)
    }
  }


  return (
    <div className={`mt-5 shadow-lg  transition-all   overflow-hidden border`}>

      <div onClick={()=>{setAcc(!acc)}} className='p-4  cursor-pointer flex flex-col justify-between  rounded bg-gray-100'>
        <div>
          <div className='flex items-center'>
            { acc ? 
            <AiOutlineRight className='mr-3' /> 
            :
            <AiOutlineDown className='mr-3' />
            }
            <span className='flex rounded-lg items-center bg-gray-200 px-2 py-1 text-base'> <FaPython size={23} className='mr-1' /> 5</span>
            <h2 className='text-lg ml-5'>Python Files</h2>
          </div>
        </div>
      </div>
      <div className={`  ${acc ? 'max-h-0' : 'max-h-max p-4' } transition-all`}>

          <div className='flex justify-between border-b-2 mb-6 border-gray-300'>
            <div>
            <label>Select All</label>
            <input onChange={handleChange} type="checkbox"  className='w-[19px] ml-3' name="selectall" id="" />
            </div>
            </div>

            {
              files.map(filename=>{

                return (
                  <div className='flex mb-5' key={Math.random()}>
                  <input type="checkbox" onChange={handleChange} checked={filename.isChecked ? true : false}  className='w-[19px] mr-7' name={filename.name} id="" />
                  <p>{filename.name}</p>
                  </div>
                
                )

              })
            } 
      


    



      </div>

    </div>
  )
}
