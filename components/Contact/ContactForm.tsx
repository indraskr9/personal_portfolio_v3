export const ContactForm = () => {
  return (
    <form id='contact-form'>
      <div className='mb-3'>
        <label
          className='block uppercase text-xs font-medium tracking-wider'
          htmlFor='email'>
          Email
        </label>
        <input
          required
          placeholder='someone@example.com'
          className='bg-dark bg-opacity-70 focus:bg-opacity-100 placeholder-blue-100 placeholder-opacity-30 outline-none px-3 py-2 rounded-sm mt-2 border-b-2 border-primaryDark focus:border-primary transition-all duration-500 w-full'
          type='email'
          name='email'
          id='email'
        />
      </div>
      <div className=''>
        <label
          className='block uppercase text-xs font-medium tracking-wider'
          htmlFor='message'>
          Message
        </label>
        <textarea
          required
          placeholder='write something...'
          className='bg-dark bg-opacity-70 focus:bg-opacity-100 placeholder-blue-100 placeholder-opacity-30 outline-none px-3 py-2 rounded-sm mt-2 border-b-2 border-primaryDark focus:border-primary transition-all duration-500 w-full min-w-full resize-none'
          name='message'
          rows={3}
          id='message'
        />
      </div>

      <button
        type='submit'
        className='mt-2 bg-primary text-primaryDark px-5 py-2 rounded-sm font-semibold block'>
        Send
      </button>
    </form>
  )
}
