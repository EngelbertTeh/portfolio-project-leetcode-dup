import CodeEditor from '@/components/component/CodeEditor';
export default function Home() {
  return (
    <main>
      <div className="bg-white flex justify-center items-center mt-[2rem]">
        <h1 className={'text-black  font-semibold'}>JAVA ASSIGNMENT 01:</h1>
      </div>
      <div className=" mx-[1rem] h-screen w-screen bg-white flex flex-col justify-center items-center ">
        <CodeEditor />
      </div>
    </main>
  );
}
