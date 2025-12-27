import PropTypes from 'prop-types';

export default function Alert(props) {
    const capitalize = (word) => {
        if (!word) return "";
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    const getTypeStyles = (type) => {
        switch (type) {
            case 'success':
                return 'text-green-800 bg-green-50 dark:bg-slate-800 dark:text-green-400 border-green-300 dark:border-green-800 shadow-green-200/50';
            case 'danger':
            case 'error':
                return 'text-red-800 bg-red-50 dark:bg-slate-800 dark:text-red-400 border-red-300 dark:border-red-800 shadow-red-200/50';
            case 'warning':
                return 'text-yellow-800 bg-yellow-50 dark:bg-slate-800 dark:text-yellow-300 border-yellow-300 dark:border-yellow-800 shadow-yellow-200/50';
            default:
                return 'text-blue-800 bg-blue-50 dark:bg-slate-800 dark:text-blue-400 border-blue-300 dark:border-blue-800 shadow-blue-200/50';
        }
    }

    return (
        <div className="fixed top-20 right-4 z-[100] max-w-md w-full sm:w-80 transition-all duration-300">
            {props.alert && (
                <div 
                    className={`flex items-center p-4 mb-4 text-sm rounded-xl border shadow-xl ${getTypeStyles(props.alert.type)}`} 
                    role="alert"
                >
                    <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <div className="flex-1">
                        <span className="font-bold">{capitalize(props.alert.type)}</span>
                        <p className="mt-0.5">{props.alert.msg}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

Alert.propTypes = {
  alert: PropTypes.shape({
    type: PropTypes.string,
    msg: PropTypes.string
  })
};