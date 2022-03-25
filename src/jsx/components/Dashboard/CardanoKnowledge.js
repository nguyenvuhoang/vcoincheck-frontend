import { Fragment } from 'react'
/// Bootstrap
import { Card, Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
/// Compoents
import PageTitle from '../../layouts/PageTitle'



const getImage = (image) => {
  if (image.length > 0 )  {
      return <img className="card-img-top img-fluid" src={require(`../../../images/library/${image}.png`).default} alt=""/>
  }
}

const knowledgelist = [

  {
    id:1,
    name:"cardano-blockchain",
    title: "What is the Cardano blockchain?",
    img: "cardano",
    date: "23/03/2022 03:26:00 AM",
  },
  {
    id:2,
    name:"pos-mechainism-ouroboros",
    title: "What is the POS mechanism – ouroboros?",
    img: "ouroboros",
    date: "23/03/2022 03:26:00 AM",
  },
  {
    id:3,
    name:"hydra",
    title: "What is Hydra?",
    img: "hydra",
    date: "23/03/2022 03:26:00 AM",
  },
  {
    id:4,
    name:"haskel-programming-language",
    title: "What is the Haskell programming language?",
    img: "haskel",
    date: "23/03/2022 03:26:00 AM",
  },
  {
    id:5,
    name:"stablecoin-djed",
    title: "Stablecoin Djed?",
    img: "djed",
    date: "23/03/2022 03:26:00 AM",
  },
  {
    id:6,
    name:"stabe-fee",
    title: "What is the Stabe fee?",
    img: "stablefee",
    date: "23/03/2022 03:26:00 AM",
  },
]


const CardanoKnowledge = (props) => {
  return (
    <Fragment>
      <PageTitle activeMenu='Cardano Knowledge' motherMenu='Library' />
      <Row>
        {knowledgelist.map((knowledge, index) => (
            <Col xl='4' key={index}>
              <NavLink to={`${props.match.url}/${knowledge.name}`}>
                <Card className='mb-3'>
                  <Card.Link href='#' className='float-right'>
                    {getImage(knowledge.img)}
                    <Card.Header>
                      <Card.Title className='fs-16 text-black'>{knowledge.title}</Card.Title>
                    </Card.Header>
                    <Card.Footer className=' bg-transparent border-0 text-blue'>
                      {knowledge.date}
                    </Card.Footer>
                  </Card.Link>
                </Card>
              </NavLink>
            </Col>
        ))}
        
      </Row>
    </Fragment >
  )
}

export default CardanoKnowledge
