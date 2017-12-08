export default class Time {
    
    getTime(timeInMilliseconds) {

        let time = timeInMilliseconds;
        
        const hours = this.formatUnitOfTime(Math.floor( time / (60 * 60 * 1000)));
        
        time = time % (60 * 60 * 1000);
        const minutes = this.formatUnitOfTime(Math.floor( time / (60 * 1000)));
        
        time = time % (60 * 1000);
        const seconds = this.formatUnitOfTime(Math.floor( time / 1000 ));
        
        const milliseconds = this.formatUnitOfTime(time % 1000);
        
        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }

    formatUnitOfTime(unitOfTime) {
        return unitOfTime < 10 ? `0${unitOfTime}`.substring(0,2) : unitOfTime.toString().substring(0,2);
    }
}