/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom"
import { MdOutlineMail, MdOutlineRemoveRedEye  } from "react-icons/md";
import { FieldValues,SubmitHandler,useForm } from "react-hook-form";
import { useSignInUserMutation } from "../../redux/features/user/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { verifyToken } from "../../utils/verifyToken";
import { TUser } from "../../types/alltypes";
import { setUser } from "../../redux/features/user/authSlice";
import { ReactNode } from "react";
import PHForm from "../form/PHForm";
import PHInput from "../form/PHInput";


// Define the form input types
type TSignInFormInputs ={
  email: string;
  password: string;
}
type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;


const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
const style = {
  authInput:"w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 pl-2 pr-8 py-3 outline-none",
  formStyle:"bg-white max-w-xl w-full mx-auto shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 sm:p-8 rounded-2xl"
};
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignInFormInputs>();

  const [signInUser, { isLoading, isError, error }] = useSignInUserMutation();
  const defaultValues = {
    email: 'ask6@gmail.com',
    password: 'ask123',
  };

  const onSubmit:SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    try {
      const res = await signInUser(data).unwrap();
      console.log(res.data.token);
      const user = verifyToken(res.data.token) as TUser;
      console.log(user);
      dispatch(setUser({ user: user, token: res.data.token }));
      // alert(`Sign-in successful! Token: ${res.token}`);
      navigate(`/`);
      // You can save the token to localStorage or Redux state for future requests
      // localStorage.setItem('token', response.token);
    } catch (err) {
      alert('Sign-in failed!');
    }
  };

  return (
    <div className="font-[sans-serif] relative">
    <div className="h-[240px] font-[sans-serif]">
      <img
        src="https://i.ibb.co.com/wppqnqS/segway-xyber-header.jpg"
        alt="Banner Image"
        className="w-full h-full object-cover"
      />
    </div>
  
    <div className="relative -mt-10 m-4">
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues} style={style}>
      <div className="mb-12">
          <h3 className="text-gray-800 text-3xl text-center">Sign In</h3>
        </div>
  
  
        <div className="mt-8">
        <label className="text-gray-800 text-xs block mb-2">Email</label>
        <div className="relative flex items-center">
        <PHInput type="email" name="email" label="Email" 
            style={style} />
          <MdOutlineMail fill="#bbb"
            stroke="#bbb"
            className="w-[18px] h-[18px] absolute right-2" />
       
        </div>
        {errors.email && <span className="text-red-700">{errors.email.message}</span>}
      </div>

      <div className="mt-8">
        <label className="text-gray-800 text-xs block mb-2">Password</label>
        <div className="relative flex items-center">
        <PHInput type="password" name="password" label="Email" 
            style={style} />

        
          <MdOutlineRemoveRedEye   fill="#bbb"
            stroke="#bbb"
            className="w-[18px] h-[18px] absolute right-2 cursor-pointer"/>
          
        </div>
        {errors.password && <span>{errors.password.message}</span>}
      </div>
  
      
  
        <div className="mt-8">
          <button
            type="submit"
            className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
          <p className="text-gray-800 text-sm mt-4 text-center">
            Don't have an account?{" "}
           
            <Link to='/signup'  className="text-blue-500 font-semibold hover:underline ml-1">Register here</Link>
          </p>
        </div>

        {isError && (
        <div className="text-center text-red-700">Error: {(error as any)?.data?.message || 'Something went wrong'}</div>
      )}

      
    
      </PHForm>
      {/* <form onSubmit={handleSubmit(onSubmit)} defaultValues={defaultValues} className="bg-white max-w-xl w-full mx-auto shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 sm:p-8 rounded-2xl">
        <div className="mb-12">
          <h3 className="text-gray-800 text-3xl text-center">Sign In</h3>
        </div>
  
  
        <div className="mt-8">
        <label className="text-gray-800 text-xs block mb-2">Email</label>
        <div className="relative flex items-center">
          <input
           
            type="text"
           
            className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 pl-2 pr-8 py-3 outline-none"
            placeholder="Enter email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            })}
          />
          <MdOutlineMail fill="#bbb"
            stroke="#bbb"
            className="w-[18px] h-[18px] absolute right-2" />
       
        </div>
        {errors.email && <span className="text-red-700">{errors.email.message}</span>}
      </div>

      <div className="mt-8">
        <label className="text-gray-800 text-xs block mb-2">Password</label>
        <div className="relative flex items-center">

          <input
         
            type="password"
            required
            className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 pl-2 pr-8 py-3 outline-none"
            placeholder="Enter password"
            {...register('password', { required: 'Password is required' })}
          />
          <MdOutlineRemoveRedEye   fill="#bbb"
            stroke="#bbb"
            className="w-[18px] h-[18px] absolute right-2 cursor-pointer"/>
          
        </div>
        {errors.password && <span>{errors.password.message}</span>}
      </div>
  
      
  
        <div className="mt-8">
          <button
            type="submit"
            className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
          <p className="text-gray-800 text-sm mt-4 text-center">
            Don't have an account?{" "}
           
            <Link to='/signup'  className="text-blue-500 font-semibold hover:underline ml-1">Register here</Link>
          </p>
        </div>

        {isError && (
        <div className="text-center text-red-700">Error: {(error as any)?.data?.message || 'Something went wrong'}</div>
      )}

      </form> */}
    </div>
  </div>
  )
}

export default SignIn