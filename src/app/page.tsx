import CodeEditor from '@/components/component/CodeEditor';

export default function Home() {
  return (
    <main>
      <div className="h-screen w-screen bg-white flex flex-col justify-center items-center">
        <h1 className={'text-black mb-4 font-semibold'}>JAVA ASSIGNMENT 01:</h1>
        <CodeEditor />
      </div>
    </main>
  );
}
