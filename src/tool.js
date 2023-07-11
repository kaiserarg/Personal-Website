import Contactraw from "./customization/Contact.json";

export function Path(props) {
    return (
		<p id="path"> 
		</p>
    );
}

export function Code(props) {
    return (
        <p id="code">
            &nbsp;&gt; {props.command} <br/>
        </p>
    );
}



export function ASCII() {
    return (
        <pre>
            <h2>
                <code>
{`           
 _                _  _           
| |_  ___  ___  _| || | ___  _ _ 
| . ||  _|| .'|| . || || -_|| | |
|___||_|  |__,||___||_||___||_  |
                            |___|                   
 _                      
| |_  _ _  ___  ___  ___ 
|   || | || .'||   || . |
|_|_||___||__,||_|_||_  |
                    |___|                                                                                                                                                                                 
`}</code>                 
            </h2>
        </pre>
    );
}

export function Contact() {
    return (
        <div class="contact">
            <span class="text">
                <p><i class="fa-solid fa-envelope"></i> Email: {Contactraw.email}</p>
                <p><i class="fa-solid fa-phone"></i> Phone: {Contactraw.phone}</p>
            </span>
        </div>
    );
}
