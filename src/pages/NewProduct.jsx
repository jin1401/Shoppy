import React, { useState } from "react";
import Button from "../components/ui/Button";
import { uploadImage } from "../api/uploader";
import { addNewProduct } from "../api/firebase";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  // 입력 폼에서 발생한 모든 handleChange는 이름이 file인 경우에만 file을 set해주고, 그 나머지 경우에는 기존의 product 오브젝트에 업데이트 되는 부분만 덮어 씌어준다.
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //제품의 사진을 클라우디에 업로드 하고 URL을 획득
    uploadImage(file).then((url) => {
      console.log(url);
      //firebase에 새로운 제품을 추가함
      addNewProduct(product, url);
    });
  };
  return (
    <section>
      {file && <img src={URL.createObjectURL(file)} alt="local file"></img>}
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <h1 className="py-3 font-bold">새로운 제품 등록</h1>
        <input
          className="border-solid border-2 w-4/5 px-2 py-2 mb-1"
          type="file"
          accept="image/*"
          name="file"
          onChange={handleChange}
          required
        />
        <input
          className="border-solid border-2 w-4/5 px-2 py-2 mb-1"
          type="text"
          name="title"
          value={product.title ?? ""}
          placeholder="제품명"
          onChange={handleChange}
          required
        />
        <input
          className="border-solid border-2 w-4/5 px-2 py-2 mb-1"
          type="number"
          name="price"
          value={product.price ?? ""}
          placeholder="가격"
          onChange={handleChange}
          required
        />
        <input
          className="border-solid border-2 w-4/5 px-2 py-2 mb-1"
          type="text"
          name="category"
          value={product.category ?? ""}
          placeholder="카테고리"
          onChange={handleChange}
          required
        />
        <input
          className="border-solid border-2 w-4/5 px-2 py-2 mb-1"
          type="text"
          name="description"
          value={product.description ?? ""}
          placeholder="제품 설명"
          onChange={handleChange}
          required
        />
        <input
          className="border-solid border-2 w-4/5 px-2 py-2 mb-1"
          type="text"
          name="options"
          value={product.options ?? ""}
          placeholder="옵션들(콤마(,)로 구분)"
          onChange={handleChange}
          required
        />
        <Button text={"제품 등록하기"} />
      </form>
    </section>
  );
}
