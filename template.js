/* Duyệt mảng arr
arr.forEach((item, index) => {
  console.log(index, item);
});
const isSubset = arr1.every(el => arr2.includes(el)); => arr2 là cha arr1
const hasCommon = arr1.some(el => arr2.includes(el)); => 2 đứa có cùng con vậy con chung con riêng tìm làm sao
const common = arr1.filter(el => arr2.includes(el)); => Con chung
const onlyArr1 = arr1.filter(el => !arr2.includes(el)); //=> Con riêng arr1

arr2.includes("abc");
const s = new Set(["a", "b", "c", "a"]); => Set(3) {"a", "b", "c"}  -> "a" chỉ xuất hiện 1 lần

let arr = [1, 2];
let newArr = [...arr, 3]; 
console.log(newArr); // [1, 2, 3]
console.log(arr);    // [1, 2] (mảng gốc vẫn giữ nguyên)

*/

/*Duyệt Object
	Object.keys(Obj).forEach(Key => {
		console.log(Key, Obj[Key]);
	});
*/

/* Duyệt html
document.getElementById(`id`)
document.querySelectorAll(`.class`)
document.querySelector(`.class`)/document.querySelector(`input`) ... 
el → viết tắt của element, thường dùng khi duyệt DOM node.
btn → cho button.
input → cho thẻ input.
arr → cho mảng.
obj → cho object.

list / items → khi là danh sách phần tử.
map / dict → khi là object kiểu ánh xạ key-value.
val → cho giá trị lấy từ input.
num / str / bool → cho số, chuỗi, boolean.
tmp → biến tạm.
idx → index trong vòng lặp.
node / div / span → khi muốn rõ loại thẻ DOM.
*/

function checkOrientation() {
	const body = document.body; // gán body của trang
	if (window.innerHeight > window.innerWidth) {
		// portrait → chặn
		body.classList.add("portrait");
	} else {
		// landscape → cho xài
		body.classList.remove("portrait");
	}
}
window.addEventListener("resize", checkOrientation);
checkOrientation();

function deepCheckUndefined(obj, path = "") {
  if (Array.isArray(obj)) {
    obj.forEach((item, idx) => {
      if (item === undefined) {
        console.warn(`Array ${path}[${idx}] = undefined`);
      } else {
        deepCheckUndefined(item, `${path}[${idx}]`);
      }
    });
  } else if (typeof obj === "object" && obj !== null) {
    for (const key in obj) {
      if (obj[key] === undefined) {
        console.warn(`Field ${path}.${key} = undefined`);
      } else {
        deepCheckUndefined(obj[key], `${path}.${key}`);
      }
    }
  }
}
function makeCountMap(arr) { //Trả về: arr{key: count}
	return arr.reduce((acc, item) => {
		acc[item] = (acc[item] || 0) + 1;
		return acc;
	}, {});
}

function ArrCheck(arr) {
	if (Array.isArray(arr)) {
		console.log("Là array!");
	} else {
	console.log("Không phải array.");
	}
}
function intersect(...arrays) {
  if (arrays.length === 0) return [];
  // chuẩn hóa tất cả phần tử về lowercase + trim
  const normalized = arrays.map(arr =>
    arr.map(item => String(item).toLowerCase().trim())
  );
  return normalized.reduce((acc, arr) => acc.filter(x => arr.includes(x)));
}

function Compare(A = [], B = []) {
  const lowerA = A.map(item => String(item).trim());
  const lowerB = B.map(item => String(item).trim());

  const common = lowerA.filter(item => lowerB.includes(item));
  const match = [...new Set(common)];
  const onlyA = lowerA.filter(item => !lowerB.includes(item));
  const onlyB = lowerB.filter(item => !lowerA.includes(item));
  const diff = [...new Set([...onlyA, ...onlyB])];
  const total = [...new Set([...lowerA, ...lowerB])];

  return { onlyA, onlyB, diff, match, total };
}


function toggleElement(arr, l) { //Check arr có l hay chưa, có thì thêm, ko thì bỏ
	const index = arr.indexOf(l);
	if (index === -1) {
		arr.push(l); // chưa có thì thêm
	} else {
		arr.splice(index, 1); // có rồi thì bỏ ra
	}
	return arr;
}

function randomPastel(alpha = 0.5) {
  // tạo màu pastel bằng cách random trong khoảng sáng
  const r = Math.floor(Math.random() * 127 + 127); // 127–254
  const g = Math.floor(Math.random() * 127 + 127);
  const b = Math.floor(Math.random() * 127 + 127);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}



function Activecolor(i,alpha = 0.5){ //setup --active-color cho mọi i // color(tag,randomPastel());
	const btns = document.querySelectorAll(`${i}`);
	btns.forEach(btn => {
		// mỗi nút gán một màu ngẫu nhiên
		btn.style.setProperty("--active-color", randomPastel(alpha));
	});
}

