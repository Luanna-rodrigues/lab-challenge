import React from "react";
import Avatar from '../../assets/avatar.png'
import "./styles.scss";

const UserDetails = ({ user }) => {
  const {  cpf, nome, sobrenome } = user;

  return (
    <section className="user-details card">
      <img src={Avatar} className="card-img-top" alt={nome} />
      <article className="card-body">
        <h2 className="name">{`${nome} ${sobrenome}`}</h2>
        <p>
          <strong>CPF: </strong>{cpf}
        </p>
      </article>
    </section>
  );
};

export default UserDetails;
