for (let count=1; count<=50; count++) {
  if (count %10 == 0){
    console.log("今"+count+"回ループしました。");
  }else if (count %4 === 0){
    console.log("4で割れる数です。"+count);
  }else{
    console.log(count);
  }
  if (count == 50){
  alert("50回カウントが終わりました。");
  }
}