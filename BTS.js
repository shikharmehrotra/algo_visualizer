

var rows,cols;
var array = [];
var sortArray=[];
var arrayCreated=false;
var comparison=0,swaps=0;
function setArray() 
{
	array = [];
  vis=[];
  dist=[];
  comparison=0,swaps=0;
	for ( let i = 0; i < rows ; i++)
	{
		let row = [];
		for( let j = 0; j < cols; j++)
		{
			row.push(0);
      		sortArray.push(0);
		}
		array.push(row);
    vis.push(row);
    dist.push(row);
	}
}
var source,dest;
function createGrid()
{
  
  rows=document.getElementById("Rows").value;
  cols=document.getElementById("Cols").value;
  
  setArray();
  var gridRows = "";
	var gridBoxes = "";
	rowLength = cols;
	columnLength = rows;
	var i, j;
	for (i = 0; i < columnLength; i++) {			//adding <div></div> to the existing html element to create the grid
		gridBoxes = "";
		for(j = 0; j < rowLength; j++) {
      // <div class="box" id ="1,2" ></div>
			gridBoxes +='<div class="col" id="'+i+","+j+'"></div>' ;
			array[i][j] = 0;
		}
		gridRows += '<div class="row">' + gridBoxes + '</div>';				//boxes are added to rows
	}
	var container = document.getElementById("grid");
	container.innerHTML = gridRows;				//rows are added to existing html element

   source=document.getElementById("0,0");
  source.innerText="S";
  dest=document.getElementById((rows-1)+","+(cols-1));
  dest.innerText="D";
  var cells=document.getElementsByClassName("col");
  for(var i=0;i<cells.length;i++)
  {
    cells[i].addEventListener("click",function(){
      var x=parseInt(this.id.split(",")[0]);
      var y=parseInt(this.id.split(",")[1]);
      
      if(this.innerText==="X")
      {
        array[x][y]=1;
        this.innerText='';
      }
      else if(!(this.innerText==="S")){
      	array[x][y]="#";
      this.innerText="X";
  }
    })
  }
  var createArrayButn=document.getElementById("array");
  createArrayButn.remove();
}
async function BubbleSort()
{
	console.log("HH");
	var n=cols;
	comparison=0,swaps=0;
	for(var i=0;i<n;i++)
	{
		for(var j=0;j<n-1-i;j++)
		{
			if(sortArray[j]>sortArray[j+1])
			{
				swaps++;

				var init=document.getElementById((0)+","+(j));
				var final=document.getElementById((0)+","+(j+1));
				init.style.backgroundColor="red";
				final.style.backgroundColor="red";
				await new Promise((resolve) =>
					        setTimeout(() => {
					          resolve();
					        }, 1000))
				var c=sortArray[j];
				sortArray[j]=sortArray[j+1];
				sortArray[j+1]=c;
				final.innerText=sortArray[j+1];
				init.innerText=sortArray[j];
				init.style.backgroundColor="white";
				final.style.backgroundColor="white";
				await new Promise((resolve) =>
					        setTimeout(() => {
					          resolve();
					        }, 1000))
				
			}
			comparison++;
		}
		var fixed=document.getElementById((0)+","+(n-1-i));
		fixed.style.backgroundColor="green";
		await new Promise((resolve) =>
					        setTimeout(() => {
					          resolve();
					        }, 1000))
	}
	
}
async function SelectionSort()
{
	// 5 7 6 4 2
	// 2 7 6 4 5
	// 2 4 6 7 5
	var n=cols;	
	comparison=0,swaps=0;
	for(var i=0;i<n;i++)
	{
		var mn=sortArray[i];
		var pointer=i;
		var check=true;
		var init=document.getElementById((0)+","+(i));
		init.style.backgroundColor="blue";
		
		for(var j=i;j<n;j++)
		{
			await new Promise((resolve) =>
					        setTimeout(() => {
					          resolve();
					        }, 1000))
			if(mn>sortArray[j])
			{
				
				if(!check){
				var init=document.getElementById((0)+","+(pointer));
				init.style.backgroundColor="yellow";
			}
				mn=sortArray[j];
				pointer=j;

				init=document.getElementById((0)+","+(pointer));
				init.style.backgroundColor="red";
				check=false;
			}
			else 
			{
				if(j!=i)
				{
					if(j==n-1)
						console.log("HERE");
						var traversed=document.getElementById((0)+","+(j));
					traversed.style.backgroundColor="yellow";
				}
			}
			comparison++;
		}
		
		await new Promise((resolve) =>
					        setTimeout(() => {
					          resolve();
					        }, 1000))
		for(var j=i+1;j<n;j++){
			if(j!=pointer){
			var traversed=document.getElementById((0)+","+(j));
					traversed.style.backgroundColor="white";
				}
		}
		var c=sortArray[i];
		if(i!=pointer)
			swaps++;
		sortArray[i]=sortArray[pointer];
		sortArray[pointer]=c;
		
		var init=document.getElementById((0)+","+(i));
		var final=document.getElementById((0)+","+(pointer));
		final.style.backgroundColor="white";
		init.innerText=sortArray[i];
		final.innerText=sortArray[pointer];
		var fixed=document.getElementById((0)+","+(i));
		fixed.style.backgroundColor="green";
		await new Promise((resolve) =>
					        setTimeout(() => {
					          resolve();
					        }, 1000))
	}
	console.log(sortArray);

}
async function InsertionSort()
{
	var n=cols;
	comparison=0,swaps=0;
	for(var i=0;i<n;i++)
	{
		var optimal=i;
		// 5 7 10     15 20 8
		// 	optimal
		  var insertElement=document.getElementById((0)+","+(i));
		  insertElement.style.backgroundColor="red";
		  await new Promise((resolve) =>
					        setTimeout(() => {
					          resolve();
					        }, 1000))
		for(var j=0;j<=i-1;j++)
		{
			if(sortArray[j]>sortArray[i])
				{
					comparison++;
					optimal=j;
					break;
				}
		}

		var j=i-1;
		while(j>=optimal)
		{
			var init=document.getElementById((0)+","+(j));
				var final=document.getElementById((0)+","+(j+1));
				var c=sortArray[j];
				swaps++;

				sortArray[j]=sortArray[j+1];
				sortArray[j+1]=c;
				final.innerText=sortArray[j+1];
				init.innerText=sortArray[j];
				init.style.backgroundColor="red";
				final.style.backgroundColor="green";
				await new Promise((resolve) =>
					        setTimeout(() => {
					          resolve();
					        }, 1000))
				
				j--;
		}
		document.getElementById((0)+","+(optimal)).style.backgroundColor="green";
		await new Promise((resolve) =>
					        setTimeout(() => {
					          resolve();
					        }, 1000))

	}
	console.log(sortArray);

}
function createArray()
{
	arrayCreated=true;
	var arrayContainer=document.getElementById("SortAlgos");
	var bubble='<button id="BubbleSort">BubbleSort</button>';
	var selection='<button id="SelectionSort">SelectionSort</button>';
	var insertion='<button id="InsertionSort">InsertionSort</button>';
	var merge='<button id="MergeSort">MergeSort</button>';
	arrayContainer.innerHTML=bubble+selection+insertion+merge;

rows=1;
  cols=document.getElementById("Cols").value;
  
  setArray();
  var gridRows = "";
	var gridBoxes = "";
	rowLength = cols;
	columnLength = rows;
	var i, j;
	for (i = 0; i < columnLength; i++) {			//adding <div></div> to the existing html element to create the grid
		gridBoxes = "";
		for(j = 0; j < rowLength; j++) {
      // <div class="box" id ="1,2" ></div>
			gridBoxes +='<div class="col" id="'+i+","+j+'">0</div>' ;
			array[i][j] = 0;
		}
		gridRows += '<div class="row">' + gridBoxes + '</div>';				//boxes are added to rows
	}
	var container = document.getElementById("grid1");
	container.innerHTML = gridRows;
	var runDFS=document.getElementById("Run DFS");
	runDFS.remove();
	var runBFS=document.getElementById("Run BFS");
	runBFS.remove();
	document.getElementById("createGrid").remove();
	var cells=document.getElementsByClassName("col");
  for(var i=0;i<cells.length;i++)
  {
    cells[i].addEventListener("click",function(){
      var x=parseInt(this.id.split(",")[0]);
      var y=parseInt(this.id.split(",")[1]);
      
      var val=parseInt(prompt("Enter value at "+(y+1)+": "));
      sortArray[y]=val;
      if(isNaN(val))
      this.innerText=0;
  else
      this.innerText=val;
    })
  }
  var bubbleSort=document.getElementById("BubbleSort");
  var selectionSort=document.getElementById("SelectionSort");
  var insertionSort=document.getElementById("InsertionSort");
  var mergeSort=document.getElementById("MergeSort");
 bubbleSort.addEventListener("click",BubbleSort);
 selectionSort.addEventListener("click",SelectionSort);
 insertionSort.addEventListener("click",InsertionSort);
 mergeSort.addEventListener("click",MergeSort);
}
 async function MergeSortUtil(l,r)
{

if(l<r){
	
		var mid=(parseInt((l+r)/2));

	 await MergeSortUtil(l,mid);
	
	 await MergeSortUtil(mid+1,r);
	
	await mergeUtil(l,mid,mid+1,r);
	
	for(var i=l;i<=mid;i++)
	{
		var init=document.getElementById((0)+","+(i));
	
		init.style.backgroundColor="red";
	}
	 for(var i=mid+1;i<=r;i++)
	{
		var init=document.getElementById((0)+","+(i));
		
		init.style.backgroundColor="blue";
	}
	for(var i=0;i<cols;i++)
	{
		var init=document.getElementById((0)+","+(i));
		init.innerText=sortArray[i];
	}
	console.log(sortArray);
	  await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 5000))
	}
	for(var i=l;i<=r;i++)
	{
		var init=document.getElementById((0)+","+(i));
		
		init.style.backgroundColor="white";
	}
}
 function mergeUtil(l1,r1,l2,r2)
{

	var temp=[];
	var i1=l1,i2=l2;
	while((i1<=r1) && (i2<=r2))
	{
		if(sortArray[i1]<=sortArray[i2])
		{
			temp.push(sortArray[i1++]);
		}
		else
		{
			temp.push(sortArray[i2++]);
		}
	}
	while(i1<=r1)
	{
		temp.push(sortArray[i1++]);
	}
	while(i2<=r2)
	{
		temp.push(sortArray[i2++]);
	}
	var j=0;
	for(var pos=l1;pos<=r2;pos++)
		sortArray[pos]=temp[j++];
}
var sortArray1=[];
function dummyMergeSortUtil(l,r)
{

if(l<r){
	
		var mid=(parseInt((l+r)/2));

	  dummyMergeSortUtil(l,mid);
	
	  dummyMergeSortUtil(mid+1,r);
	
	 dummymergeUtil(l,mid,mid+1,r);
	
}
}
 function dummymergeUtil(l1,r1,l2,r2)
{

	var temp=[];
	var i1=l1,i2=l2;
	while((i1<=r1) && (i2<=r2))
	{
		if(sortArray1[i1]<=sortArray1[i2])
		{
			temp.push(sortArray1[i1++]);
		}
		else
		{
			temp.push(sortArray1[i2++]);
		}
		comparison++;
	}
	while(i1<=r1)
	{
		temp.push(sortArray1[i1++]);
		comparison++;
	}
	while(i2<=r2)
	{
		temp.push(sortArray1[i2++]);
		comparison++;
	}
	var j=0;
	for(var pos=l1;pos<=r2;pos++)
		sortArray1[pos]=temp[j++];
}
function MergeSort()
{

	var n=cols;
	comparison=0,swaps=0;
MergeSortUtil(0,n-1);

for(var i=0;i<sortArray.length;i++)
sortArray1.push(sortArray[i]);
var start = window.performance.now();
dummyMergeSortUtil(0,n-1);
// console.log(sortArray1);
var end = window.performance.now();
var time = end - start;
console.log(time);
}
var createArrayButn=document.getElementById("array");
createArrayButn.addEventListener("click",createArray);
async function bfs(){
  var queue=[];
  queue.push([0,0]);
  vis[0][0]=1;
  var dx=[-1,0,0,1];
  var dy=[0,-1,1,0];
  var level=-1;
  while(queue.length>0)
  {
    var sz=queue.length;
    level++;
    await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 1000))
    while(sz--){
  var src=queue.shift();
  var cell=document.getElementById(src[0]+","+src[1]);
  cell.style.backgroundColor="red";
        cell.innerText=level;
  for(var i=0;i<4;i++)
  {
      var ni=src[0]+dx[i];
       var nj=src[1]+dy[i];
       if((ni>=0 && ni<rows) && (nj>=0 && nj<cols )&& (vis[ni][nj]===0) )
       {
          
          //  par[ni][nj]=[src[0],src[1]];
         
          
           vis[ni][nj]=1;
           queue.push([ni,nj]);
       }
  }
}
  }
}
var runBFS=document.getElementById("Run BFS");
runBFS.addEventListener("click",bfs);

var createGridButton=document.getElementById("createGrid");
createGridButton.addEventListener("click",createGrid);
var runDFS=document.getElementById("Run DFS");
var dx=[-1,0,0,1];
var dy=[0,-1,1,0];
var calls=0;
async function dfs(i,j)
{
  vis[i][j]=1;
  calls++;
  // const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));
  var cell=document.getElementById(i+","+j);
  cell.style.backgroundColor="green";
  cell.innerText="In: "+calls;
  await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 1000))
  for(var dir=0;dir<4;dir++)
  {
    var ni=i+dx[dir];
    var nj=j+dy[dir];
    if(ni>=0 && ni<rows && nj>=0 && nj<cols && (!vis[ni][nj]))
    {
     await dfs(ni,nj);
    }
  }
  calls++;
  cell.style.backgroundColor="red";
  cell.innerText+=", Out: "+calls;
  await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 1000))
}

function dfsUtil()
{
  var srci=0,srcj=0;
  calls=0;
  dfs(srci,srcj);
}
runDFS.addEventListener("click",dfsUtil);
