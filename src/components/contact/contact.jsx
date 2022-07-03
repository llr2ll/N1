import React from 'react';
import './contact.css';
import Nav from '../nav/nav';
import Footer from '../footer/footer';

//https://bobbyhadz.com/blog/react-you-provided-checked-prop-to-form-field-without-onchange#:~:text=by%20Ke%20Atlas-,You%20provided%20%27checked%27%20prop%20to%20a%20form%20field%20without%20onChange,onChange%20prop%20on%20the%20field.

function Contact() {

  const [isSubscribed, setIsSubscribed] = React.useState(false);
  
  const handleChange = event => {
    setIsSubscribed(event.target.checked);
  };
  
  return (
    <> 
      
        <div className='products-nav'>
          <Nav />
        </div>
      <div className='contact'>
        
      
      <div className='contact-content'>
        
    			<form>
    				<label htmlFor="nomesobrenome">Nome e sobrenome</label>
    				<input type="text" id="nomesobrenome" className="input-padrao" required placeholder="Nome completo"/>
    
    				<label htmlFor="email">Email</label>
    				<input type="email" id="email" className="input-padrao" required placeholder="seuemail@dominio.com" />
    
    				<label htmlFor="telefone">Telefone</label>
    				<input type="tel" id="telefone" className="input-padrao" required placeholder="(XX) XXXXX-XXXX" />
    
    				<label htmlFor="mensagem">Mensagem</label>
    				<textarea cols="70" rows="10" id="mensagem" className="input-padrao" required></textarea>
    
    				<fieldset>
    					<legend>Como prefere o nosso contato?</legend>
    					<label htmlFor="radio-email"><input type="radio" name="contato" value="email" id="radio-email" onChange={handleChange} checked={isSubscribed} /> Email</label>
    					
    					<label htmlFor="radio-telefone"><input type="radio" name="contato" value="telefone" id="radio-telefone" onChange={handleChange} checked={isSubscribed} /> 
              Telefone</label>
    					
    					<label htmlFor="radio-whatsapp"><input type="radio" name="contato" value="whatsapp" id="radio-whatsapp" onChange={handleChange} checked={isSubscribed} /> WhatsApp</label>
    				</fieldset>
    
    				<fieldset>
    					<legend>Qual horário prefere ser atendido?</legend>
    					<select>
    						<option>Manhã</option>
    						<option>Tarde</option>
    						<option>Noite</option>
    					</select>
    				</fieldset>
    
    				<label className="checkbox"><input type="checkbox" onChange={handleChange} checked={isSubscribed} />Gostaria de receber nossas novidades por email? 
            </label>
            <div>
      				<input type="submit" value="Enviar formulário" className="enviar" />
            </div>
    			</form>
    
    			<table>
            <tbody>
        				<tr className='date'>
        					<td>Dia</td>
        					<td>Horário</td>
        				</tr>
        				<tr>
        					<td>Segunda</td>
        					<td>8h ~ 20h</td>
        				</tr>
        				<tr>
        					<td>Quarta</td>
        					<td>8h ~ 20h</td>
        				</tr>
        				<tr>
        					<td>Sexta</td>
        					<td>8h ~ 20h</td>
        				</tr>
            </tbody>
    			</table>
        
      </div>
      <Footer />
    </div>
    </>
  );
}

export default Contact;