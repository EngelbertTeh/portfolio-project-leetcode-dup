import CodeEditor from '@/components/component/CodeEditor';
export default function Home() {
  return (
    <main>
      <div className=" flex justify-center items-center mt-[2rem]  ">
        <h1 className={'text-black  font-semibold'}>JAVA ASSIGNMENT 01:</h1>
      </div>

      <div className=" mx-[1rem] h-screen w-screen bg-white flex  justify-evenly items-start mt-10 ">
        <div className="  my-2 text-xs pl-2 pr-4 ">
          <p className="text-slate-200">
            First input determines the n number of inputs to receive
          </p>
          &nbsp; &nbsp;
          <p className="font-bold">Sample Inputs: </p>
          <p>2 </p>
          <p>aaeiou </p>
          <p>oieaieaoeiou</p>
        </div>
        <CodeEditor />
      </div>
    </main>
  );
}
