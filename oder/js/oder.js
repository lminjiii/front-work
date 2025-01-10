document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // 폼 제출 방지 (필요시 제거 가능)

    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("adress").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value.trim();
    const memo = document.getElementById("memo").value.trim();
    const packaging = document.querySelector("input[name='present']:checked").value;

    console.log("이름 : " + name);
    console.log("배송 주소 : " + address);
    console.log("이메일 : " + email);
    console.log("연락처 : " + phone);
    console.log("배송 날짜 : " + date);
    console.log("메모 : " + memo);
    console.log("선물 포장 : " + (packaging === "yes" ? "포장" : "포장 안 함"));

    const products = document.querySelectorAll("input[type='checkbox']");
    products.forEach((product, index) => {
      if (product.checked) {
        const quantity = document.querySelectorAll("input[type='text']")[index].value.trim();
        console.log(`상품 ${index + 1} : 선택됨, 수량 - ${quantity}`);
      }
    });
  });
});

