import { Link, useNavigate } from 'react-router-dom';
// import { FaEnvelope, FaUser, FaLock } from 'react-icons/fa'; // Import icons
import { useFormik } from 'formik';

const Signup = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: '',
      confirmPassword: '',
      acceptTerms: false
    },
    onSubmit: values => {
      console.log(values);
   
      navigate("/");
    }
  });

  return (
    <div className='min-h-screen bg-[#faf0e2] flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='text-center text-3xl font-extrabold text-gray-900'>Sign up for an account</h2>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md mx-10'>
        <div className='bg-[#FFF7ED] py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <form className='space-y-6' onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                Email address
              </label>
              <div className='mt-1'>
                <div className='flex'>
                  <span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm'>
                    {/* <FaEnvelope /> */}
                  </span>
                  <input
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor='username' className='block text-sm font-medium text-gray-700'>
                Username
              </label>
              <div className='mt-1'>
                <div className='flex'>
                  <span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm'>
                    {/* <FaUser /> */}
                  </span>
                  <input
                    name='username'
                    type='text'
                    autoComplete='username'
                    required
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                Password
              </label>
              <div className='mt-1'>
                <div className='flex'>
                  <span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm'>
                    {/* <FaLock /> */}
                  </span>
                  <input
                    name='password'
                    type='password'
                    autoComplete='new-password'
                    required
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700'>
                Confirm password
              </label>
              <div className='mt-1'>
                <div className='flex'>
                  <span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm'>
                    {/* <FaLock /> */}
                  </span>
                  <input
                    name='confirmPassword'
                    type='password'
                    autoComplete='new-password'
                    required
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <input
                name='acceptTerms'
                type='checkbox'
                required
                className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                checked={formik.values.acceptTerms}
                onChange={formik.handleChange}
              />
              <label htmlFor='acceptTerms' className='ml-2 block text-sm text-gray-900'>
                I accept the <Link to="/terms" className="text-orange-600">Terms and Conditions</Link>
              </label>
            </div>

            <div>
              <button
                type='submit'
                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
