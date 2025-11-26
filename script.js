let score = 0;
let currentScenario = -1;

const scenarios = [
  {
    text: "สถานการณ์ที่ 1 – ขณะนักเรียนสอบเก็บคะแนนท้ายบทคุณสังเกตเห็นนักเรียนสองคนกำลังแอบส่งโพยข้อสอบให้กันคุณจะทำอย่างไร?",
    options: [
      { text: "นิ่งเฉย ทำเป็นไม่สนใจ", score: 0 },
      { text: "บอกให้หยุดแล้วกาหัวข้อสอบของนักเรียนทันที", score: 2 },
      { text: "ต่อว่านักเรียนอย่างรุนแรง", score: -1 },
      { text: "ให้นักเรียนสอบใหม่", score: 1 },
    ]
  },
  {
    text: "สถานการณ์ที่ 2 – หลังการสอบคุณนัดนักเรียนมาตรวจสมุดนับลายเซ็นต์เพื่อเป็นคะแนนเก็บคุณพบว่านักเรียนคนหนึ่งปลอมลายเซ็นต์ของคุณคุณจะทำอย่างไร?",
    options: [
      { text: "กล่าวตักเตือนและหักคะแนน", score: 2 },
      { text: "นิ่งเฉย และตรวจให้คะแนนตามปกติ", score: -2 },
      { text: "ลงโทษและตัดคะแนนนักเรียนคนนั้น", score: 1 },
      { text: "แจ้งผู้ปกครองถึงการกระทำของนักเรียน", score: 2 },
    ]
  },
  {
    text: "สถานการณ์ที่ 3 – คุณเดินผ่านห้องพักครูพละและพบครูที่เป็นกรรมการงานกรีฑารับเงินจากประธานคณะสีเพื่อให้สีนั้นชนะเลิศคุณจะทำอย่างไร?",
    options: [
      { text: "เดินผ่าน", score: -2 },
      { text: "ยกโทรศัพท์ถ่ายคลิปเป็นหลักฐาน", score: 2 },
      { text: "รีบเข้าไปขัดขวาง และนำเงินมาใช้เอง", score: -2 },
      { text: "เสนอช่วยให้สีนั้นชนะ", score: -2 },
    ]
  },
  {
    text: "สถานการณ์ที่ 4 – คุณกำลังตรวจสอบยอดเงินเก็บห้อง และพบว่ายอดค่าใช้จ่ายและรายรับไม่ตรงกันสอบถามเหรัญญิกแล้วพบว่า เขานำเงินไปใช้ส่วนตัวคุณจะทำอย่างไร?",
    options: [
      { text: "แจ้งผู้ปกครองให้ทราบถึงพฤติกรรม", score: 2 },
      { text: "ตักเตือนว่าอย่าทำอีก", score: 1 },
      { text: "แจ้งทางโรงเรียนให้พักการเรียน", score: 2 },
      { text: "ช่วยจ่ายเงินแทนนักเรียน", score: -2 },
    ]
  },
  {
    text: "สถานการณ์ที่ 5 – ขณะคุณกำลังตรวจสอบรายงานผลการประเมินของนักเรียนในชั้นเรียนคุณพบว่าเพื่อนครูคนหนึ่งปรับคะแนนนักเรียนบางคนให้สูงเกินจริง ทั้งที่นักเรียนเหล่านั้นไม่ได้ทำงานครบตามเกณฑ์คุณจะทำอย่างไร?",
    options: [
      { text: "ปฏิเสธและแจ้งผู้บริหาร", score: 2 },
      { text: "นิ่งเฉยเพราะไม่อยากมีปัญหากับเพื่อนครู", score: -2 },
      { text: "คุยกับเพื่อนครูเพื่อให้แก้ไขคะแนนตามจริง", score: 1 },
      { text: "ปรับคะแนนนักเรียนเองให้ถูกต้องโดยไม่แจ้งเพื่อนครู", score: 1 },
    ]
  }
];

function startGame(){
  score = 0;
  currentScenario = 0;
  showScenario();
}

function showScenario(){
  const gameDiv = document.getElementById("game");
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if(currentScenario < scenarios.length){
    const scenario = scenarios[currentScenario];
    let html = `<h2>${scenario.text.replace(/\n/g,"<br>")}</h2>`;
    scenario.options.forEach((opt,i)=>{
      html += `<button class="option" onclick="selectOption(${i})">${opt.text}</button>`;
    });
    gameDiv.innerHTML = html;
  } else {
    showResult();
  }
}

function selectOption(optionIndex){
  score += scenarios[currentScenario].options[optionIndex].score;
  currentScenario++;
  showScenario();
}

function showResult(){
  const gameDiv = document.getElementById("game");
  gameDiv.innerHTML = "";
  const resultDiv = document.getElementById("result");

  let resultText = "";
  if(score >= 8){
    resultText = "คุณคือ ครูผู้ยึดมั่นในความถูกต้อง<br>ตัดสินใจทุกอย่างโดยคำนึงถึงความซื่อสัตย์และความยุติธรรม";
  } else if(score >=4){
    resultText = "คุณคือ ครูที่พยายามรักษามาตรฐาน<br>แม้บางครั้งลังเล แต่ยังคงยึดค่านิยมที่ถูกต้อง";
  } else {
    resultText = "คุณคือ ครูที่ต้องทบทวนค่านิยม<br>บางครั้งการมองข้ามทุจริตอาจนำไปสู่ปัญหาใหญ่";
  }

  resultDiv.innerHTML = `<h2>ผลการตัดสินใจของคุณ:</h2>
                         <p>${resultText}</p>
                         <p>คะแนนค่านิยมต่อต้านทุจริต: <strong>${score}</strong></p>
                         <button onclick="startGame()">กลับไปเริ่มต้นใหม่</button>`;
}
