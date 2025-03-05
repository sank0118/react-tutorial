import { useNavigate } from "react-router-dom";
import { Alert, Item } from "./store";
import { useCallback } from "react";

const Requirement = () => {
  const { items, remove, setPayload } = Item.use();
  const { alert } = Alert.use();
  const navi = useNavigate();

  //! 리액트 컴포넌트 안에서  또 다른 컴포넌트를 만들어 쓰지 마세요.
  // ! useCallback에서 감싸서 만들면 허용해줌

  // ? 리액트 컴포넌트에서 불러온 함수를 손 쉽게 props-drilling 없이 공유할 수 있음
  //? 멀리 안나가도 앱으로 뿌릴 컴포넌트 확인이 빠름
  const RItem = useCallback(
    ({
      id,
      descs,
      index,
      manager,
      status,
      title,
    }: Item.Item & { index: number }) => {
      return (
        <div className="border p-5 rounded-xl border-gray-200 bg-gray-50 hover:bg-gray-100 ">
          <div className=" flex justify-between">
            <div className="items-center flex gap-x-2.5">
              <p className="font-bold">
                {index + 1}. {title}
              </p>
              <p className="text-gray-500 text-xs">{manager}</p>
            </div>
            <p
              className={
                status === "완료"
                  ? "text-blue-500"
                  : status === "계획중"
                  ? "text-orange-500"
                  : "text-red-500"
              }
            >
              {status}
            </p>
          </div>

          <ul className="flex flex-col mt-2.5 gap-y-1 py-0 text-xs">
            {descs.map((desc, di) => (
              <li key={desc} className="flex">
                <p className="bg-white rounded text-gray-500 p-1">
                  {di + 1}. {desc}
                </p>
              </li>
            ))}
          </ul>
          <div className=" flex justify-end gap-x-2.5">
            <button
              className="cursor-pointer"
              onClick={() => {
                setPayload({ id, descs, manager, status, title });
                navi(id);
              }}
            >
              수정
            </button>
            <button
              className="cursor-pointer hover:text-red-500 active:opacity-50"
              onClick={() => {
                remove(id);
                alert("삭제되었습니다.");
              }}
            >
              삭제
            </button>
          </div>
        </div>
      );
    },
    [remove, alert, navi, setPayload]
  );

  return (
    <ul>
      {items.map((item, index) => (
        <li key={item.id}>
          <RItem {...item} index={index} />
        </li>
      ))}
    </ul>
  );
};

export default Requirement;

// 요구사항 명세 내용 출력
// <ul>
//   {items.map((item, index) => (
//     <li key={item.id}>
//       <Link to={item.id} onClick={() => setPayload(item)}>
//         {index + 1}. {item.title} {item.status} {item.manager}
//         <button
//           onClick={() => {
//             remove(item.id);
//             alert("삭제되었습니다.");
//           }}
//         >
//           삭제
//         </button>
//       </Link>
//     </li>
//   ))}
// </ul>
