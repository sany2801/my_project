import "./form.css"
const Form = ()=>{
    return(
            <div className="formAdmin">
                <form className="form">
                    <label for="adres">Адрес объекта</label>
                    <input id="adres"></input>


                    <label for="time">Время работы
                    <div className="timeInput">
                    <p>с</p>
                    <input id="time" type={"time"}></input>
                    <p>до</p>
                    <input id="time" type={"time"}></input>
                    </div>
                    </label>

                    <label for="photo">Фото объекта</label>
                    <input id="photo" type={'file'} accept="image"></input>

                </form>
            </div>
        )
}
export default Form