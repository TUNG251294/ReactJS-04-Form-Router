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

// username: chấp nhận các kí tự từ a-z, A-Z, tối thiểu 2 kí tự
// email:
// Chấp nhận các kí tự a-z, A-Z, 0-9, dấu” +, -” trước dấu “@”
// Cần có kí tự “@”
// Chấp nhận kí tự a-z, A-Z, 0-9, dấu ” -” sau dấu “@”
// password:
// Chấp nhận các kí tự a-z, A-Z, 0-9, !, @, #, $,%, ^, &, các kí tự trong (+=._-)
// Tối thiểu 6 kí tự
// confirm password: cần giống password

// đặt giá trị (value) trong thẻ input cho phép người dùng xem và chỉnh sửa giá trị đã nhập trước đó. 
// Khi gõ vào ô input, giá trị mới sẽ được cập nhật vào state của ứng dụng thông qua hàm handleChange. 
// Nếu không có giá trị được đặt trước đó, khi nhấn nút "Submit" và có lỗi xảy ra, giá trị trong ô input sẽ bị mất đi


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

// Cú pháp ?. là optional chaining operator trong JavaScript, được giới thiệu trong phiên bản ES2020. Nó cho phép 
// truy cập đến một thuộc tính hoặc phương thức của một đối tượng mà không cần kiểm tra đối tượng đó có tồn tại hay không. 
// Nếu thuộc tính đó không tồn tại hoặc đối tượng là null hoặc undefined thì kết quả trả về sẽ là undefined.

// Việc sử dụng optional chaining operator giúp cho chương trình không bị lỗi runtime khi truy cập vào một thuộc tính 
// của một đối tượng mà không kiểm tra đối tượng đó có tồn tại hay không.

