import henry from '../assets/henry.jpg';

export default function Intro() {
  return (
    <div className="h-screen bg-slate-950 text-primary flex flex-col justify-start items-center">
      <div className="pt-36">
        <img
          src={henry}
          alt="Henry Zhang"
          className="rounded-full"
          width={400}
          height={400}
          priority
        />
      </div>
      <div className="flex flex-col space-y-2 justify-center items-center">
        <h1 className="font-bold text-4xl">Henry Zhang</h1>
        <h2 className="text-3xl">Software Engineer</h2>
        <ul className="flex space-x-3">
          <li>
            <a href="MitravasuPrakash_Resume.pdf" target="_blank">
              Resume
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/hz757/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/HZ757" target="_blank">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}