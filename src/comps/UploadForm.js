import React, {useState} from 'react'
function UploadForm(){
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const allowTypes = ['image/png', 'image/jpeg', 'image/jpg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        console.log(selected);
        if (selected && allowTypes.includes(selected.type)){
            setFile(selected);
            setError('');
        }
        else{
            setFile(null);
            setError("File's type must be png, jpeg or jpg");
        }
    }
    return (
        <form>
            <input type="file" onChange={changeHandler}></input>
            <div className='output'>
                {error && <div className='error'>{error}</div>}
                {file && <div>{file.name}</div>}
            </div>
        </form>
    )
}

export default UploadForm;