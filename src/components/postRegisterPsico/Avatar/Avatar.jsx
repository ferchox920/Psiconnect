import{ label, p, errorsText } from '../PostRegisterPsico.module.css';
import { 
    divContainerImg,
    divAvatar, 
    avatar,
    divInputsImage, 
    inputAvatarError, 
    inputImage,
    inputImageDisabled 
} from './Avatar.module.css';

const Avatar = ({state, setState, errors}) => {

const handleInputDeletedAvatar = () => {
    if(state.avatar && state.avatarIMG){ 
        setState({
            ...state,
                avatar:'',
                avatarIMG:'',
                altIMG:''
        })
    }
};
const handleInputChangeAvatar = (e) =>{
    if(errors.avatar) delete errors.avatar
    if(e.target.files[0]){
        setState({
            ...state,
            avatar : e.target.files[0],
            avatarIMG : URL.createObjectURL(e.target.files[0]),
            altIMG : e.target.files[0].name
        })
    }
};    
    return(
        <>
            <label className={label}> Avatar </label>
            <p className={p}>
                *selecciona un imagen para tu foto de perfil
            </p>
            <span className={errorsText}>
                {errors.avatar}
            </span>
            <div className={divContainerImg}>
                <div className={divAvatar}>
                    <img 
                    className={avatar}
                    src={state.avatarIMG}
                    alt={state.altIMG || 'IMG'}
                    />
                </div>
                <div className={divInputsImage}>
                    <input
                    className={errors.avatar? inputAvatarError : inputImage}
                    id='imageAvatar'
                    type="file" 
                    accept="image/*"
                    name="avatar"
                    value={state.avatar? state.avatarIMG.name : ''}
                    onChange={ handleInputChangeAvatar }
                    />
                    <input
                    className={state.avatar? inputImage : inputImageDisabled}
                    id='deleteImageAvatar'
                    type='button'
                    name='avatar'
                    value='Borrar imagen'
                    disabled={state.avatar? false : true}
                    onClick={handleInputDeletedAvatar}
                    />
                </div>
            </div>
        </>
    )
}

export default Avatar;