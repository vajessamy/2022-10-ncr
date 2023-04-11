const React = require('react')
    class Show extends React.Component {
       render () {
        const vegetable = this.props.vegetable
        return (
            <div>
                <h1> Show Page </h1>
                The {vegetable.name} is {vegetable.color} 
                {vegetable.readyToEat? " it is ready to eat"  : ' it is not ready to eat... Cant touch this'}
            </div>
         );
        }
     }
     module.exports  = Show;