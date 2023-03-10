import './App.css';
import React, {useState} from 'react'

export default function App() {
  const MESSAGE_ERROR = {
    username: 'Username error',
    email: 'Email error',
    password: 'Password error',
    confirmpassword: 'Password must be the same'
  }
  const REGEX = {
    username: /^[a-zA-Z]{2,}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^[a-zA-Z0-9!@#$%^&*)(+=._-]{6,}$/
  }
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    let error = '';
    if(e.target.name === 'password'){
      if(form.confirmpassword && form.confirmpassword.value){
        error =
        e.target.value === form.confirmpassword.value ? '': MESSAGE_ERROR[e.target.name]
      } else {
        error =
        REGEX[e.target.name].test(e.target.value) ? '': MESSAGE_ERROR[e.target.name]
      } 
    } else if (e.target.name === 'confirmpassword'){
      error =
      e.target.value === form.password.value ? '': MESSAGE_ERROR[e.target.name]
    } else {
      error =
      REGEX[e.target.name].test(e.target.value) ? '': MESSAGE_ERROR[e.target.name]
    }
    setForm({...form,[e.target.name]: {value: e.target.value, error: error}})
  }

  const handleSubmit = () => {
    const isFilled = form.username && form.username.value && form.email && form.email.value && 
      form.password && form.password.value && form.confirmpassword && form.confirmpassword.value;
    const isError = isFilled && (form.username.error || form.email.error || 
      form.password.error || form.confirmpassword.error);
    alert(
      isFilled && !isError ? "Sign up successfully!!!" : "Please fill out all the fields!!!"
    );
  }

  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form>
        <div className={`custom-input ${form.username &&
            form.username.error && "custom-input-error"}`}>
          <label htmlFor='un'>Username</label>
          <input id = 'un' name = 'username' onChange={handleChange}
            value = {(form.username && form.username.value) || ''}/>
        {form.username && form.username.error && (
          <p className='error'>{form.username.error}</p>
        )}
        </div>
        <div className={`custom-input ${form.email &&
            form.email.error && "custom-input-error"}`}>
          <label htmlFor='em'>Email</label>
          <input id = 'em' name = 'email' onChange={handleChange}
            value={(form.email && form.email.value) || ""}/>
          {form.email && form.email.error && (
            <p className="error">{form.email.error}</p>
          )}
        </div>
        <div>
          <label htmlFor='pw'>Password</label>
          <input id = 'pw' name = 'password' onChange={handleChange}
            value={(form.password && form.password.value) || ""}/>
          {form.password && form.password.error && (
            <p className="error">{form.password.error}</p>
          )}
        </div>
        <div>
          <label htmlFor='cpw'>Confirm Password</label>
          <input id = 'cpw' name = 'confirmpassword' onChange={handleChange}
            value={(form.confirmpassword && form.confirmpassword.value) || ""}/>
          {form.confirmpassword && form.confirmpassword.error && (
            <p className="error">{form.confirmpassword.error}</p>
          )}
        </div>
        
        <button type='button' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

// username: ch???p nh???n c??c k?? t??? t??? a-z, A-Z, t???i thi???u 2 k?? t???
// email:
// Ch???p nh???n c??c k?? t??? a-z, A-Z, 0-9, d???u??? +, -??? tr?????c d???u ???@???
// C???n c?? k?? t??? ???@???
// Ch???p nh???n k?? t??? a-z, A-Z, 0-9, d???u ??? -??? sau d???u ???@???
// password:
// Ch???p nh???n c??c k?? t??? a-z, A-Z, 0-9, !, @, #, $,%, ^, &, c??c k?? t??? trong (+=._-)
// T???i thi???u 6 k?? t???
// confirm password: c???n gi???ng password

// ?????t gi?? tr??? (value) trong th??? input cho ph??p ng?????i d??ng xem v?? ch???nh s???a gi?? tr??? ???? nh???p tr?????c ????. 
// Khi g?? v??o ?? input, gi?? tr??? m???i s??? ???????c c???p nh???t v??o state c???a ???ng d???ng th??ng qua h??m handleChange. 
// N???u kh??ng c?? gi?? tr??? ???????c ?????t tr?????c ????, khi nh???n n??t "Submit" v?? c?? l???i x???y ra, gi?? tr??? trong ?? input s??? b??? m???t ??i


// const MESSAGE_ERROR = {
//   username: 'Username error',
//   email: 'Email error',
//   password: 'Password error',
//   confirmpassword: 'Password must be the same'
// };

// const REGEX = {
//   username: /^[a-zA-Z]{2,}$/,
//   email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//   password: /^[a-zA-Z0-9!@#$%^&*)(+=._-]{6,}$/
// };

// export default function App() {
//   const [form, setForm] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const error = name === 'confirmpassword'
//       ? value === form.password?.value ? '' : MESSAGE_ERROR[name]
//       : REGEX[name].test(value) ? '' : MESSAGE_ERROR[name];
//     setForm({ ...form, [name]: { value, error }});
//   };

//   const handleSubmit = () => {
//     const isFilled = Object.values(form).every(field => field?.value);
//     const isError = Object.values(form).some(field => field?.error);
//     alert(isFilled && !isError ? "Sign up successfully!!!" : "Please fill out all the fields!!!");
//   };

//   return (
//     <div className="App">
//       <h1>Sign Up</h1>
//       <form>
//         <div className={`custom-input ${form.username?.error && "custom-input-error"}`}>
//           <label htmlFor='un'>Username</label>
//           <input id='un' name='username' onChange={handleChange} value={form.username?.value || ''}/>
//           {form.username?.error && <p className='error'>{form.username.error}</p>}
//         </div>
//         <div className={`custom-input ${form.email?.error && "custom-input-error"}`}>
//           <label htmlFor='em'>Email</label>
//           <input id='em' name='email' onChange={handleChange} value={form.email?.value || ''}/>
//           {form.email?.error && <p className='error'>{form.email.error}</p>}
//         </div>
//         <div>
//           <label htmlFor='pw'>Password</label>
//           <input id='pw' name='password' type='password' onChange={handleChange} value={form.password?.value || ''}/>
//           {form.password?.error && <p className='error'>{form.password.error}</p>}
//         </div>
//         <div>
//           <label htmlFor='cpw'>Confirm Password</label>
//           <input id='cpw' name='confirmpassword' type='password' onChange={handleChange} value={form.confirmpassword?.value || ''}/>
//           {form.confirmpassword?.error && <p className='error'>{form.confirmpassword.error}</p>}
//         </div>
//         <button type='button' onClick={handleSubmit}>Submit</button>
//       </form>
//     </div>
//   );
// }

// C?? ph??p ?. l?? optional chaining operator trong JavaScript, ???????c gi???i thi???u trong phi??n b???n ES2020. N?? cho ph??p 
// truy c???p ?????n m???t thu???c t??nh ho???c ph????ng th???c c???a m???t ?????i t?????ng m?? kh??ng c???n ki???m tra ?????i t?????ng ???? c?? t???n t???i hay kh??ng. 
// N???u thu???c t??nh ???? kh??ng t???n t???i ho???c ?????i t?????ng l?? null ho???c undefined th?? k???t qu??? tr??? v??? s??? l?? undefined.

// Vi???c s??? d???ng optional chaining operator gi??p cho ch????ng tr??nh kh??ng b??? l???i runtime khi truy c???p v??o m???t thu???c t??nh 
// c???a m???t ?????i t?????ng m?? kh??ng ki???m tra ?????i t?????ng ???? c?? t???n t???i hay kh??ng.

