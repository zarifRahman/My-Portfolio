import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "React Native", "React"];
  const period = 2000;

	useEffect(() => {
		const ticker = setTimeout(() => tick(), delta);
		return () => clearTimeout(ticker);
	},[text])

	const tick = () => {
		const i = loopNum % toRotate.length;
		const fullText = toRotate[i];
		let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
		setText(updatedText);

		if(isDeleting){
			setDelta(prevDelta => prevDelta / 2)
		}
		if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
	}
	
	return (
    <section className='banner' id='home'>
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1>
              {`Hi! I'm Zarif. I have experience in `}
              <span
                className='txt-rotate'
                dataperiod='1000'
                data-rotate='[ "React JS", " React Native"]'
              >
                <span className='wrap'>{text}</span>
              </span>
            </h1>
            <p>
              Frontend Engineer with 3+ years of professional experiences in Web
              Development.I have worked on both web and mobile application.
							And i love playing football.
            </p>
            <button
              onClick={() =>
								window.open('https://www.linkedin.com/in/zarif-shahriar-rahman-634142173/', '_blank')
              }
            >
              Let’s Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className='animate__animated animate__zoomIn'>
              <img src={headerImg} alt='Header Img' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}