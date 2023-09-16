import { Component } from "react";
import { signUp } from '../../utilities/users-service';
import styles from './SignUpForm.module.scss';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;

      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({ error: 'Sign up failed. Please try again.' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className={styles['signup-form-container']}>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label className={styles['signup-label']}>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
              className={styles['signup-input']}
            />
            <label className={styles['signup-label']}>Email Address</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
              className={styles['signup-input']}
            />
            <label className={styles['signup-label']}>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
              className={styles['signup-input']}
            />
            <label className={styles['signup-label']}>Confirm Password</label>
            <input
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
              className={styles['signup-input']}
            />
            <button
              type="submit"
              disabled={disable}
              className={styles['signup-button']}
            >
              Create an Account
            </button>
          </form>
        </div>
        <p className={styles['signup-error-message']}>&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
