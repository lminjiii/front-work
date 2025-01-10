    function check(){
        // 입력한 내용을 사라지지 않게 유지하는 함수
      event.preventDefault();
      const uderId = document.querySelector("#u_id");
      const email = document.querySelector("#email");
      const password = document.querySelector("#pwd1");
      const confirmPassword = document.querySelector("#pwd2");
      const path = document.querySelector("#path");
      const memo = document.querySelector("#memo");
      const mail_y = document.querySelector("#mail_y");
      const mailling = document.getElementsByName("mailling");

      //  1. 아이디가 4자~10자 사이인지 확인
      if(u_id.value.length < 4 || u_id.value.length > 10  ) {
        alert('아이디를 4 ~ 10자 사이로 입력해 주세요.');
        //  비우고
        u_id.value = '';
        //  포커스 주기
        u_id.focus();
      }

      //  2. 이메일이 비었는지 확인
      if(email.value.length == 0) {
        alert('이메일이 비었습니다. 입력해 주세요');
        //  비우고
        email.value = '';
        //  포커스 주기
        email.focus();
      }

      //  3. 비밀전호와 비밀번호 확인 두 값이 같은지 확인
      if(password.value !== confirmPassword.value) {
        alert('비밀번호가 다릅니다. 학인하세요');
        confirmPassword.value = '';
        confirmPassword.focus;
      }

      // 메일 수신 여부를 검사 -> 리턴값 설정
      let mailReceive;

      mailling.forEach((x) => {
        if(x.checked){
          mailReceive = x.value;
        }
      });

      // alert(uderId.value);
      console.log('User-ID : ' + uderId.value);
      console.log('Email : ' + email.value);
      console.log('Password : ' + password.value);
      console.log('가입경로 : ' + path.value);
      console.log('메모 : ' + memo.value);
      console.log('MailReceive : ' +  mailReceive);
    }
