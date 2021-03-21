import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function OptionResult(props) {
  let now = (props.votes.length / props.total) * 100;
  now = Math.round(now * 10) / 10;
  return (
    <div>
      <Card>
        {props.authedUserVoted && (
          <Card.Header className="bg-success">Your Choice</Card.Header>
        )}
        <Card.Body>
          <div>{props.text}</div>
          <div>
            <ProgressBar now={now} label={`${now}%`} />
          </div>
          <div>
            {props.votes.length} out of {props.total}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
