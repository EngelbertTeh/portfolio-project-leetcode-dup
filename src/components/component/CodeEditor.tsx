'use client';
function CodeEditor() {
  return (
    <div className="flex flex-col items-center justify-center">
      <form
        id="myForm"
        onSubmit={(event) => {
          // handle form submit
          event.preventDefault();
          console.log('pressed');
          // call hackerearth api
        }}
        className="bg-slate-200 h-[60dvh] p-2 mx-4 w-full lg:w-[1000px] rounded-md relative overflow-hidden"
      >
        <div className="h-[95%] py-2">
          <p className="text-slate-600">class Program &#123;</p>
          <p className="text-slate-600 px-[2rem]">
            public static void main &#40; String&#91; &#93; args &#41; &#123;
          </p>

          <textarea
            style={{
              resize: 'none',
              outline: 'none',
              height: 'calc(100% - 4rem)',
            }}
            className="w-full h-full bg-gray-200 my-2 py-[1rem] px-[4rem]  text-slate-600"
            placeholder="Write your code here..."
          ></textarea>

          <p className="text-slate-600"> &#125;</p>
        </div>
      </form>
      <button
        type={'submit'}
        form={'myForm'}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded   mt-[2rem] w-[200px] lg:w-[500px]  "
      >
        Submit
      </button>
    </div>
  );
}

export default CodeEditor;
