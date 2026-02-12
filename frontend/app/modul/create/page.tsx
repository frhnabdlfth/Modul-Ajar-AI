import React, { useState } from 'react';

const CreateModulePage = () => {
    const [moduleName, setModuleName] = useState('');
    const [moduleDescription, setModuleDescription] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Logic to create the new module with AI goes here.
        // This is a placeholder for the actual implementation.
        console.log('Creating module:', { moduleName, moduleDescription });
        setIsSubmitting(false);
    };

    return (
        <div>
            <h1>Create New AI Module</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="moduleName">Module Name:</label>
                    <input
                        type="text"
                        id="moduleName"
                        value={moduleName}
                        onChange={(e) => setModuleName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="moduleDescription">Module Description:</label>
                    <textarea
                        id="moduleDescription"
                        value={moduleDescription}
                        onChange={(e) => setModuleDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Creating...' : 'Create Module'}</button>
            </form>
        </div>
    );
};

export default CreateModulePage;
