import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center flex-col m-10 ">
      <h1>Technical Task</h1>
      <div className="my-5" >
        <Link className="btn m-2" href="/cats-form">Categories Form</Link>
        <Link className="btn m-2" href="/static-page">Static Page</Link>
      </div>
    </main>
  );
}
