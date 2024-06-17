export default function MainHeader() {
  return (
    <header className="bg-white shadow border-b-1">
      <div className="mx-auto flex-row max-w-7xl py-6 px-4 sm:px-6 lg:px-8 ">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          SAVIEW
        </h1>
        <h2 className="text-lg font-bold tracking-tight text-gray-500">
          새 질문 쓰기
        </h2>
        <h2 className="text-lg font-bold tracking-tight text-gray-500">
          로그인
        </h2>
      </div>
    </header>
  );
}
