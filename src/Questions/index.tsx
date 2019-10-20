import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Question {
  id: number;
  title: string;
  description: string;
  answers: Array<string>;
}

interface State {
  questions: Array<Question>;
}

class Questions extends Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      questions: []
    };
  }

  async componentDidMount() {
    const questions = (await axios.get('http://localhost:8081/')).data;
    console.log({ questions });
    this.setState({
      questions
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.questions === null && <p>Loading questions...</p>}
          {this.state.questions &&
            this.state.questions.map(question => (
              <div key={question.id} className="col-sm-12 col-md-4 col-lg-3">
                <Link to={`/question/${question.id}`}>
                  <div className="card text-white bg-success mb-3">
                    <div className="card-header">
                      Answers: {question.answers}
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">{question.title}</h4>
                      <p className="card-text">{question.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Questions;
