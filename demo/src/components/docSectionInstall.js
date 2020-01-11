import React from 'react'

class DocSectionInstall extends React.Component {

    render(){
        return <section id="install">
        <h3>Install</h3>
        <p>Run the following command inside your react project</p>
        <pre className="code-bloc lang-cli">
            <code >
                <div><span className="cli-name">npm</span> install axl-react-fixed-nav</div>
            </code>
        </pre>                            
    </section>
    }

}

export default DocSectionInstall;