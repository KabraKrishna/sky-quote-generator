export default function FloatingActionButton({ children, onPress }) {

    return (
        <div 
            className="btn btn-primary btn-circle text-white hover:btn-primary-focus absolute right-2 bottom-2 shadow-lg" 
            onClick={onPress}>{children}</div>
    )
}