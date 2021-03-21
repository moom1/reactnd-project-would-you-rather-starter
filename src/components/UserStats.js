import { CardDeck } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function UserStats(props) {
  const { user } = props;
  const numOfAnswers = Object.keys(user.answers).length;
  const numOfQuestions = Object.keys(user.questions).length;
  return (
    <Card className="text-center">
      <Card.Header className=" h3">{user.name}</Card.Header>

      <CardDeck>
        <Card>
          {" "}
          <Card.Img
            className="mx-auto mt-5 text-center"
            src={user.avatarURL}
            style={{
              border: "1px solid black",
              background: "black",
              borderRadius: "100%",
            }}
          />
        </Card>

        <Card>
          <Card.Body
            className=" h4 pt-4"
            style={{
              border: "0.1em solid black",
            }}
          >
            Answered Questions: {numOfAnswers}
          </Card.Body>
          <Card.Body
            className=" h4 pt-4"
            style={{
              border: "0.1em solid black",
            }}
          >
            Created Questions: {numOfQuestions}
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>SCORE</Card.Header>

          <Card.Body
            className=" h1 pt-5"
            style={{
              border: "3px solid black",
              fontSize: "5em",
            }}
          >
            {numOfAnswers + numOfQuestions}
          </Card.Body>
        </Card>
      </CardDeck>
    </Card>
  );
}
