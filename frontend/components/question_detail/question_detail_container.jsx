import { connect } from 'react-redux';
import QuestionDetail from './question_detail.jsx';
import  { fetchQuestionDetail, clearErrors, clearQuestionDetail } from '../../actions/question_actions.js';
import  { deleteAnswer } from '../../actions/answer_actions.js';
import { withRouter } from 'react-router';

const mapStateToProps = ({ questionDetail, session }) => ({
  questionDetail: questionDetail,
  id: questionDetail.id,
  title: questionDetail.title,
  description: questionDetail.description,
  answers: questionDetail.answers,
  author: questionDetail.author,
  timeAgo: questionDetail.time_ago,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchQuestionDetail: (id) => dispatch(fetchQuestionDetail(id)),
  deleteAnswer: (id) => dispatch(deleteAnswer(id)),
  clearErrors: () => dispatch(clearErrors()),
  clearQuestionDetail: () => dispatch(clearQuestionDetail())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetail);
