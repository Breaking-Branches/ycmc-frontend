import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import extensionIcon from '../../helper/extensionIcon';
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai';
import { updateFiles } from '../../redux/actions/selectedFileInfoAction';

export default function FileInfo(props) {
  const [acc, setAcc] = useState(true);
  const dispatch = useDispatch();
  const filesInfo = useSelector((state) => state.filesInfoReducer)[props.reponame][props.extension];
  const { name, icon } = extensionIcon(props.extension);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedFiles(filesInfo);
    } else {
      setSelectedFiles([]);
    }
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedFiles((prevSelectedFiles) => {
      if (checked) {
        return [...prevSelectedFiles, name];
      } else {
        return prevSelectedFiles.filter((file) => file !== name);
      }
    });
  };

  useEffect(() => {
    dispatch(updateFiles([props.reponame, props.extension, selectedFiles]));
  }, [selectedFiles, dispatch, props.reponame, props.extension]);

  return (
    <div className={`mt-5 shadow-lg  transition-all   overflow-hidden border`}>
      <div
        onClick={() => {
          setAcc(!acc);
        }}
        className='p-4  cursor-pointer flex flex-col justify-between  rounded bg-gray-100'
      >
        <div>
          <div className='flex items-center'>
            {acc ? <AiOutlineRight className='mr-3' /> : <AiOutlineDown className='mr-3' />}
            <span className='flex rounded-lg items-center bg-gray-200 px-2 py-1 text-base'>
              {icon} {filesInfo.length}
            </span>
            <h2 className='text-lg ml-5'>{name} Files</h2>
          </div>
        </div>
      </div>
      <div className={`  ${acc ? 'max-h-0' : 'max-h-max p-4'} transition-all`}>
        <div className='flex justify-between border-b-2 mb-6 border-gray-300'>
          <div>
            <label>
              Select All
              <input
                type='checkbox'
                className='w-[19px] ml-3'
                checked={selectedFiles.length === filesInfo.length}
                onChange={handleSelectAll}
              />
            </label>
          </div>
        </div>

        {filesInfo.map((file) => (
          <div className='flex mb-5' key={file}>
            <input
              type='checkbox'
              checked={selectedFiles.includes(file)}
              onChange={handleCheckboxChange}
              className='w-[19px] mr-7'
              name={file}
            />
            <p>{file}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
