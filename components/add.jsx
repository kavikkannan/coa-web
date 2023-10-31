'use client'
import React from 'react'
import { useState } from 'react';

export default function add(){
  const [g, setA] = useState('');
  const [h, setB] = useState('');
  const [R, setR] = useState('');
  const [binary_a, setsa] = useState('');
  const [binary_b, setsb] = useState('');

  const [C, setc] = useState('');
  const [As, setas] = useState('');
  const [Bs, setbs] = useState('');

  const addition = async () => {
    
    let temp1= parseInt(g);
    let temp2= parseInt(h);
    let as='';
    let bs='';

    if(temp1<0){
      as='1';
      temp1=temp1*(-1);
      setas(as);
    }
    else{
      setas('0');
    }
   
    if(temp2<0){
      bs='1';
      temp2=temp2*(-1);
      setbs(bs);
    }
    else{
      setbs('0');
    }
    if(as==bs){
      let carry=0;
      let SA = (temp1 >>>0).toString(2);
      setsa(SA);
      
      let SB = (temp2 >>>0).toString(2);
      setsb(SB);
      const maxLength = Math.max(SA.length,SB.length);
      let A = parseInt(SA);
      let B = parseInt(SB);
      let res = '';
      for(let i=0;i<maxLength;i++){
        let r1=Math.round((A%10+B%10)%2);
        let r=Math.round((r1+carry)%2);
         carry=Math.floor((A%10+B%10+carry)/2);   
         res=res+r.toString();
         A=Math.floor(A/10);
         B=Math.floor(B/10);   
      }
      let result=res.split("").reverse().join("");
      setR(result);
      setc(carry);
    }
    if(as!=bs){
      console.log('as and bs are not equal');
    }
  
    
  }
  return (
    <div>
    <form className=' bg-green-200  flex-col '>
    <div className="mb-4 ">
              <input
                type="number"
                placeholder="Value of A"
                value={g}
                onChange={(e) => setA(e.target.value)}
                className="relative p-2 border rounded-md text-black"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                placeholder="Value of B"
                value={h}
                onChange={(e) => setB(e.target.value)}
                className=" p-2 border rounded-md text-black"
                required
              />
            </div>
            <div className="text-right">
              <button 
              type='button'
              onClick={addition} 
              className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Submit
              </button>
            </div>
            </form>
            <div className="mt-4 p-4 bg-green-200 rounded-md">
            <p className="mb-2 text-black">{`binary representation of A:${binary_a} `}</p>
            <p className="mb-2 text-black">{`sign bit (As): ${As}`}</p>
            <p className="mb-2 text-black">{`binary representation of B:${binary_b}`}</p>
            <p className="mb-2 text-black">{`sign bit (Bs): ${Bs}`}</p>
            <p className="mb-2 text-black">{`now let us add binary A with binary B and store it in A(i.e A<-A+B)`}</p>
            <p className="mb-2 text-black">{`which will result in the value A: ${R}  with As value as: ${As}`}</p>
            <p className="mb-2 text-black">{`overflow value AVF(AVF<-E): ${C}`}</p>
            </div>
            </div>
  )
}

