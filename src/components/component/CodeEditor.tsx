'use client';
import { FormEvent, useRef, useState } from 'react';
import { useSWRConfig } from 'swr';
interface SubmissionBody {
  lang: string;
  source: string;
  input: string;
  memory_limit: number;
  time_limit: number;
  context?: string; // Optional
  callback: string;
}
function CodeEditor() {
  const { mutate } = useSWRConfig();
  const [results, setResults] = useState<{ output: string } | undefined>(
    undefined
  );
  const [awaitedResults, setAwaitedResults] = useState<JSON | undefined>(
    undefined
  );
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const submissionBody: SubmissionBody = {
    lang: 'JAVA14',
    source: '',
    input: '', // Adjust if input is required
    memory_limit: 243232,
    time_limit: 5,
    context: '', // Optional, leave empty if not needed
    callback: 'https://client.com/callback/',
  };
  const handleForm = async (e: FormEvent) => {
    e.preventDefault();
    const data = textAreaRef.current?.value;

    const JSONdata = `public class Program { public static void main ( String[] args ) { ${data} } }`;

    submissionBody.source = JSONdata;

    const endpoint =
      'https://api.hackerearth.com/v4/partner/code-evaluation/submissions/';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-Secret': '31eb3af969a685ff525f14ccabe8862c7279bab1',
      },
      body: JSON.stringify(submissionBody),
    };
    try {
      const postResponse = await fetch(endpoint, options);

      if (!postResponse.ok) {
        const errorData = await postResponse.json();
        console.error('Error submitting code:', errorData);
        return;
      }
      const result: { status_update_url: string } = await postResponse.json();

      console.log(result.status_update_url);
      let getResponseData = null;
      do {
        const getResponse = await fetch(result.status_update_url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Client-Secret': '31eb3af969a685ff525f14ccabe8862c7279bab1',
          },
        });

        getResponseData = await getResponse.json();
      } while (getResponseData.request_status.code !== 'REQUEST_COMPLETED');
      let resp = null;
      do {
        resp = await fetch(getResponseData.result.run_status.output);
      } while (resp.status !== 200);

      console.log(resp.status);
      const blob = await resp.blob();
      const text = await blob.text();
      console.log(text.replaceAll('\n', ''));
    } catch (error) {
      console.log(error);
    }

    // mutate(
    //   'https://api.hackerearth.com/v4/partner/code-evaluation/submissions/'
    // );
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <form
        id="myForm"
        onSubmit={handleForm}
        className="bg-slate-200 h-[60dvh] p-2 w-[350px] sm:w-[600px] lg:w-[1000px] rounded-md relative overflow-hidden"
      >
        <div className="h-[95%] py-2">
          <p className="text-slate-600">class Program &#123;</p>
          <p className="text-slate-600 px-[2rem]">
            public static void main &#40; String&#91; &#93; args &#41; &#123;
          </p>

          <textarea
            ref={textAreaRef}
            style={{
              resize: 'none',
              outline: 'none',
              height: 'calc(100% - 4rem)',
            }}
            spellCheck={false}
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

      <textarea
        className={
          'bg-slate-200 pt-4  m-[2rem] rounded-md w-full h-[300px] px-[2rem]'
        }
        hidden={(results && JSON.stringify(results)) == null}
        disabled={true}
        defaultValue={(results && JSON.stringify(results)) ?? ''}
        placeholder="Output"
      ></textarea>
    </div>
  );
}

export default CodeEditor;
