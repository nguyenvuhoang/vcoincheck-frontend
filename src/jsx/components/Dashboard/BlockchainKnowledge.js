import { Fragment } from "react"
/// Bootstrap
import { Card, Col, Row } from "react-bootstrap"
/// Compoents
import PageTitle from "../../layouts/PageTitle"

const knowledgelist = [
  {
    title: "What is Blockchain?",
    img: "hydra",
    date: "23/03/2022 03:26:00 AM",
  },
  {
    title: "What is Block? What is Chain?",
    img: "hydra",
    date: "23/03/2022 03:26:00 AM",
  },
  {
    title: "What is DLT?",
    img: "hydra",
    date: "23/03/2022 03:26:00 AM",
  },
  {
    title: "What is the structure of a blockchain platform?",
    img: "hydra",
    date: "23/03/2022 03:26:00 AM",
  },
  {
    title: "What is blockchain trilemma?",
    img: "hydra",
    date: "23/03/2022 03:26:00 AM",
  },
  {
    title: "Proof-of-Work consensus mechanism",
    img: "hydra",
    date: "23/03/2022 03:26:00 AM",
  },
  {
    title: "Proof-of-Stake",
    img: "hydra",
    date: "23/03/2022 03:26:00 AM",
  },
  {
    title: "Delegated Proof of Stake",
    img: "hydra",
    date: "23/03/2022 03:26:00 AM",
  },
  {
    title: "Leased Proof-of-Stake",
    img: "hydra",
    date: "23/03/2022 03:26:00 AM",
  },
  {
    title: "Proof-of-Authority",
    img: "hydra",
    date: "23/03/2022 03:26:00 AM",
  },
  {
    title: "Proof-of-Stake-Voting consensus mechanism",
    img: "hydra",
    date: "23/03/2022 03:26:00 AM",
  },
  {
    title: "Other knowledge",
    img: "hydra",
    date: "23/03/2022 03:26:00 AM",
  },
  {
    title: "Etc",
    img: "hydra",
    date: "23/03/2022 03:26:00 AM",
  },
  {
    title: "",
    img: "hydra",
    date: "23/03/2022 03:26:00 AM",
  },
  {
    title: "What is Defi?",
    img: "hydra",
    date: "23/03/2022 03:26:00 AM",
  },
  {
    title: "Lending Borrowing mechanism",
    img: "hydra",
    date: "23/03/2022 03:26:00 AM",
  },
  {
    title: "Flashloan",
    img: "hydra",
    date: "23/03/2022 03:26:00 AM",
  },
  {
    title: "AAVE's hedging mechanism",
    img: "hydra",
    date: "23/03/2022 03:26:00 AM",
  },
  {
    title: "What is a stable coin? Types of stablecoins?",
    img: "hydra",
    date: "23/03/2022 03:26:00 AM",
  },
  {
    title: "Delegate Byzantine Fault Tolerance (DBFT - BFT Consensus Authorization Mechanism)",
    img: "hydra",
    date: "23/03/2022 03:26:00 AM",
  },
  {
    title: "Federated Byzantine Agreement (FBA – Federal Consensus Mechanism)",
    img: "hydra",
    date: "23/03/2022 03:26:00 AM",
  },
  {
    title: "Zero Knowledge Proofs (ZKP – Zero Knowledge Proofs) and Zk-SNARKs . algorithm",
    img: "hydra",
    date: "23/03/2022 03:26:00 AM",
  },
  {
    title: "Other advanced knowledge",
    img: "hydra",
    date: "23/03/2022 03:26:00 AM",
  },
]

const getImage = (image) => {
  if (image.length > 0 )  {
      return <img className="card-img-top img-fluid" src={require(`../../../images/library/${image}.png`).default} alt=""/>
  }
}

const BlockchainKnowledge = () => {
  return (
    <Fragment>
      <PageTitle activeMenu="Cardano Knowledge" motherMenu="Library" />
      <Row>
        {knowledgelist.map((knowledge, index) => (
          <Col xl="4" key={index}>
            <Card className="mb-3">
              <Card.Link href="#" className="float-right">
                {getImage(knowledge.img)}
                <Card.Header>
                  <Card.Title className="fs-16 text-black">{knowledge.title}</Card.Title>
                </Card.Header>
                <Card.Footer className=" bg-transparent border-0 text-blue">
                  {knowledge.date}
                </Card.Footer>
              </Card.Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Fragment >
  );
};

export default BlockchainKnowledge;
