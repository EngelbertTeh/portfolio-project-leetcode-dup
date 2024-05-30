'use client';
function CodeEditor() {
  return (
    <>
      <form
        onSubmit={(event) => {
          // handle form submit
          event.preventDefault();
          console.log('submitted');
        }}
        className="bg-slate-200 h-[50dvh] p-2 mx-4 w-full lg:w-[1000px] rounded-md"
      >
        <textarea
          style={{ resize: 'none', outline: 'none' }}
          className="w-full h-full bg-gray-200 p-2 text-black"
          placeholder="Write your code here..."
        ></textarea>
      </form>
      <button
        type={'submit'}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </>
  );
}

export default CodeEditor;
