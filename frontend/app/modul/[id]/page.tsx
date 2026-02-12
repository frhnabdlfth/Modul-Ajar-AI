import React from 'react';

const ModuleDetailPage = ({ moduleId }) => {
    return (
        <div>
            <h1>Module Detail for {moduleId}</h1>
            <p>Details about the module will go here.</p>
            <a href={`/download/${moduleId}`} className="download-button">Download</a>
        </div>
    );
};

export async function getServerSideProps(context) {
    const { id } = context.params;
    return { props: { moduleId: id } }; 
}

export default ModuleDetailPage;
