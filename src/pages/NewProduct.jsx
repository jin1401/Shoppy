import React from "react";

export default function NewProduct() {
  return (
    <form>
      <h1>새로운 제품 등록</h1>
      <input type="file" />
      <input type="text" placeholder="제품명" />
      <input type="number" placeholder="가격" />
      <input type="text" placeholder="카테고리" />
      <input type="text" placeholder="제품 설명" />
      <input type="text" placeholder="옵션들(,콤마)로 구분" />
      <button>제품 등록하기</button>
    </form>
  );
}
