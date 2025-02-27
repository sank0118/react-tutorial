# firebase 쓰는 법

1.dbservice 가져오기 2. .collection("저장된 아이템 이름") // 컨테이너 이름 3. .onSnapshot() //콜백함수 불러올 때 사용함 4. snap => snap.docs.map(doc=>({...doc.data(), id:doc.id})) //이런식으로 불러옴 5. useEffect안에 sub으로 선언한 뒤 저장해서 쓰고 return으로 삭제하는 방식으로 사용

**아레의 모든 기능들은 비동기 함수로 사용**

## 추가하기

1.dbservice.collection("컨테이너 이름").add(추가할 아이템)

## 삭제하기

1.dbservice.collection("컨테이너 이름").doc(삭제할 아이템아이디).delete()

## 수정하기

1.dbservice.collection("컨테이너 이름").doc(수정할 아이템아이디).set(수정할 아이템)
