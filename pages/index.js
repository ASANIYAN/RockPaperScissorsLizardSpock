import Head from 'next/head';
import Image from 'next/image';
// import Link from 'next/link';
import { useState } from 'react';
import Rules from '../components/Rules';
import styles from '../styles/Home.module.css';

export default function Home() {

  const item = ["rock", "paper", "scissors", "lizard", "spock"];
  const value = Math.floor(Math.random() * item.length);

  
  
  const [rules, setRules] = useState(false);
  const [name, setName] = useState("");
  
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("");


  function handleClick(e) {
    e.preventDefault();
    let result = item[value];
    setResult(result);
    let name = e.target.getAttribute("data-name");
    setName(name);

    if (name === "scissors" && result === "scissors") {
      setStatus("DRAW");
    } else if(name ==="scissors" && result === "paper") {
      setStatus("YOU WIN");
    } else if(name ==="scissors" && result === "lizard") {
      setStatus("YOU WIN");
    } else if(name ==="scissors" && result === "spock") {
      setStatus("YOU LOSE");
    } else if(name ==="scissors" && result === "rock") {
      setStatus("YOU LOSE");
    } else if(name ==="paper" && result === "scissors") {
      setStatus("YOU LOSE");
    } else if(name === "paper" && result === "paper") {
      setStatus("DRAW");
    } else if(name === "paper" && result === "rock") {
      setStatus("YOU WIN");
    } else if(name === "paper" && result === "spock") {
      setStatus("YOU WIN");
    } else if(name === "paper" && result === "scissors") {
      setStatus("YOU LOSE");
    } else if(name === "paper" && result === "lizard") {
      setStatus("YOU LOSE");
    } else if(name === "rock" && result === "rock") {
      setStatus("DRAW");
    } else if(name === "rock" && result === "paper") {
      setStatus("YOU LOSE");
    } else if(name === "rock" && result === "scissors") {
      setStatus("YOU WIN");
    } else if(name === "rock" && result === "lizard") {
      setStatus("YOU WIN");
    } else if(name === "rock" && result === "spock") {
      setStatus("YOU LOSE");
    } else if(name === "lizard" && result === "lizard") {
      setStatus("DRAW");
    } else if(name === "lizard" && result === "scissors") {
      setStatus("YOU LOSE");
    } else if(name === "lizard" && result === "rock") {
      setStatus("YOU LOSE");
    } else if(name === "lizard" && result === "paper") {
      setStatus("YOU WIN");
    } else if(name === "lizard" && result === "spock") {
      setStatus("YOU WIN");
    } else if(name === "spock" && result === "spock") {
      setStatus("DRAW");
    } else if(name === "spock" && result === "rock") {
      setStatus("YOU WIN");
    } else if(name === "spock" && result === "paper") {
      setStatus("YOU LOSE");
    } else if(name === "spock" && result === "scissors") {
      setStatus("YOU WIN");
    } else if(name === "spock" && result === "lizard") {
      setStatus("YOU LOSE");
    }

  }

  return (
    <>
  
      { rules &&
        <div 
        className="fixed w-screen h-screen z-10 overflow-hidden" 
        style={{backgroundColor: "rgba(0,0,0,0.5)"}}
        ></div>}


      <Head>
        <title> Rock Paper Scissors Lizard Spock</title>
      </Head>
      
      { rules &&
        <Rules setRules={setRules} />
      }
      
      <header className="">
        <div className='border-4 border-headerOutline rounded-lg mx-4 sm:mx-auto'
        style={{maxWidth: "600px"}}
        >
          <div className='flex justify-between mx-3 sm:mx-5'
          style={{height: "6.7rem"}}
          >
            
            <div className="flex flex-col text-white text-md font-extrabold mt-6 sm:mt-3.5 leading-3 sm:leading-4" style={{}}>
              <small className=''>ROCK</small>
              <small>PAPER</small>
              <small>SCISSORS</small>
              <small>LIZARD</small>
              <small>SPOCK</small>
            </div>
            
            <div className='bg-gray-100 w-24 sm:w-28 text-center rounded-md shadow-xl my-2.5'>
              <p className='text-scoreText font-semibold text-sm pt-1'>SCORE</p>
              <p className="text-6xl font-bold pb-1">0</p>
            </div>

          </div>
        </div>
      </header>

      { name === "" &&
        <section 
        className={`bg-pentagon h-80 w-72 sm:w-80 mt-20  bg-center bg-no-repeat mx-auto`}
        >
          <div
          data-name="scissors" 
          className={`${styles.scissors} ${styles.iconHold} border-8 border-scissors cursor-pointer w-16 mx-auto text-center bg-white`}
          onClick={handleClick}
          >
            <Image 
            data-name="scissors"
            src="/images/icon-scissors.svg" 
            className={`${styles.Img} border border-white`} width={50} height={50} 
            />
          </div>

          <div className='flex justify-between'>
          
          <div
          data-name="spock" 
          className={`${styles.spock} ${styles.iconHold} border-8 border-spock cursor-pointer w-16 text-center bg-white`}
          onClick={handleClick}
          >
            <Image
            data-name="spock" 
            src="/images/icon-spock.svg" 
            className={`${styles.Img} border border-white`} width={50} height={50} 
            />
          </div>
          
          <div
          data-name="paper" 
          className={`${styles.paper} ${styles.iconHold} border-8 border-paper cursor-pointer w-16 text-center bg-white`}
          onClick={handleClick}
          >
            <Image
            data-name="paper"
            src="/images/icon-paper.svg" 
            className={`${styles.Img} border border-white`} width={50} height={50} 
            />
          </div>

          </div>

          <div className='flex justify-between mt-16'>
          
          <div
          data-name="lizard" 
          className={`${styles.lizard} ${styles.iconHold} border-8 border-lizard cursor-pointer w-16 text-center bg-white`}
          onClick={handleClick}
          >
            <Image
            data-name="lizard"
            src="/images/icon-lizard.svg" 
            className={`${styles.Img} border border-white`} width={50} height={50} />
          </div>
          
          <div
          data-name="rock" 
          className={`${styles.rock} ${styles.iconHold} border-8 border-rock cursor-pointer w-16 text-center bg-white`}
          onClick={handleClick}
          >
            <Image
            data-name="rock"
            src="/images/icon-rock.svg" 
            className={`${styles.Img} border border-white`} width={50} height={50} />
          </div>

          </div>

        </section>
      }

      {
        name && 
        <section className='mx-auto h-80 w-72 sm:w-96 '>
          <div className="flex justify-between">

            { name === "scissors" &&
              <div className="mt-20">
          
                <p className='text-white text-center text-xl font-bold mb-10'>
                  YOU
                </p>
                <div 
                className={`${styles.iconHold} border-8 border-scissors cursor-pointer w-36 mx-auto text-center bg-white`}
                onClick={handleClick}
                >
                  
                  <Image 
                  src="/images/icon-scissors.svg" 
                  className={`${styles.Img} border border-white`} width={50} height={50} 
                  />
                </div>

              </div>
            }

            { name === "spock" &&
              <div className="mt-20">
          
                <p className='text-white text-center text-xl font-bold mb-10'>
                  YOU
                </p>
                <div 
                className={`${styles.spock} ${styles.iconHold} border-8 border-spock cursor-pointer w-36 mx-auto text-center bg-white`}
                onClick={handleClick}
                >
                  
                  <Image
                  src="/images/icon-spock.svg" 
                  className={`${styles.Img} border border-white`} width={50} height={50} 
                  />
                </div>

              </div>
            }

            { name === "paper" &&
              <div className="mt-20">
          
                <p className='text-white text-center text-xl font-bold mb-10'>
                  YOU
                </p>
                <div 
                className={`${styles.iconHold} border-8 border-paper cursor-pointer w-36 mx-auto text-center bg-white`}
                onClick={handleClick}
                >
                  
                  <Image
                  src="/images/icon-paper.svg" 
                  className={`${styles.Img} border border-white`} width={50} height={50} 
                  />
                </div>

              </div>
            }

            { name === "lizard" &&
              <div className="mt-20">
          
                <p className='text-white text-center text-xl font-bold mb-10'>
                  YOU
                </p>
                <div 
                className={`${styles.iconHold} border-8 border-lizard cursor-pointer w-36 mx-auto text-center bg-white`}
                onClick={handleClick}
                >
                  
                  <Image
                  src="/images/icon-lizard.svg" 
                  className={`${styles.Img} border border-white`} width={50} height={50} 
                  />
                </div>

              </div>
            }

            { name === "rock" &&
              <div className="mt-20">
          
                <p className='text-white text-center text-xl font-bold mb-10'>
                  YOU
                </p>
                <div 
                className={`${styles.iconHold} border-8 border-rock cursor-pointer w-36 mx-auto text-center bg-white`}
                onClick={handleClick}
                >
                  
                  <Image
                  src="/images/icon-rock.svg" 
                  className={`${styles.Img} border border-white`} width={50} height={50} 
                  />
                </div>

              </div>
            }

            { result === "scissors" &&
              <div className="mt-20">
          
                <p className='text-white text-center text-xl font-bold mb-10'>
                  OPPONENT
                </p>
                <div 
                className={`${styles.iconHold} border-8 border-scissors cursor-pointer w-36 mx-auto text-center bg-white`}
                onClick={handleClick}
                >
                  
                  <Image 
                  src="/images/icon-scissors.svg" 
                  className={`${styles.Img} border border-white`} width={50} height={50} 
                  />
                </div>

              </div>
            }

            { result === "spock" &&
              <div className="mt-20">
          
                <p className='text-white text-center text-xl font-bold mb-10'>
                  OPPONENT
                </p>
                <div 
                className={`${styles.spock} ${styles.iconHold} border-8 border-spock cursor-pointer w-36 mx-auto text-center bg-white`}
                onClick={handleClick}
                >
                  
                  <Image
                  src="/images/icon-spock.svg" 
                  className={`${styles.Img} border border-white`} width={50} height={50} 
                  />
                </div>

              </div>
            }

            { result === "paper" &&
              <div className="mt-20">
          
                <p className='text-white text-center text-xl font-bold mb-10'>
                  OPPONENT
                </p>
                <div 
                className={`${styles.iconHold} border-8 border-paper cursor-pointer w-36 mx-auto text-center bg-white`}
                onClick={handleClick}
                >
                  
                  <Image
                  src="/images/icon-paper.svg" 
                  className={`${styles.Img} border border-white`} width={50} height={50} 
                  />
                </div>

              </div>
            }

            { result === "lizard" &&
              <div className="mt-20">
          
                <p className='text-white text-center text-xl font-bold mb-10'>
                  OPPONENT
                </p>
                <div 
                className={`${styles.iconHold} border-8 border-lizard cursor-pointer w-36 mx-auto text-center bg-white`}
                onClick={handleClick}
                >
                  
                  <Image
                  src="/images/icon-lizard.svg" 
                  className={`${styles.Img} border border-white`} width={50} height={50} 
                  />
                </div>

              </div>
            }

            { result === "rock" &&
              <div className="mt-20">
          
                <p className='text-white text-center text-xl font-bold mb-10'>
                  OPPONENT
                </p>
                <div 
                className={`${styles.iconHold} border-8 border-rock cursor-pointer w-36 mx-auto text-center bg-white`}
                onClick={handleClick}
                >
                  
                  <Image
                  src="/images/icon-rock.svg" 
                  className={`${styles.Img} border border-white`} width={50} height={50} 
                  />
                </div>

              </div>
            }

          </div>
          <p className='text-center text-white text-2xl mt-4'>
            { status }
          </p>

          <div className="w-full mt-4 flex justify-center">
            <button 
            className="border cursor-pointer border-white rounded-lg text-white text-center font-bold py-1.5 px-6 sm:mr-5"
            onClick={() => setName("")}
            >
              PLAY AGAIN
            </button>
      </div>
        </section>
      }

      <div className="w-full mt-10 flex justify-center sm:justify-end">
        <button 
        className="border cursor-pointer border-white rounded-lg text-white text-center font-bold py-1.5 px-6 sm:mr-5"
        onClick={() => setRules(true)}
        >
          RULES
        </button>
      </div>


      
    </>
  )
}
