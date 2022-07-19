```jsx
const Card = () => (
    <div className="card">
        <img src='...' className="card-img-top" alt="avatar" />
        <div className="card-body">
            <h5 className="card-title">{/* full name */}</h5>
            <p className="card-text">Phone: </p>
            <p className="card-text">Email: </p>
            <p className="card-text">City: </p>

            <button type="button" className="btn btn-primary">
                Chat
            </button>
        </div>
    </div>
);
```