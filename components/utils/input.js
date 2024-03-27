"use client"
export default function Input({ id, lableText, type, onChange, value, error, placeholder, inputStyle, labelStyle, errorStyle }) {

    const handleInputChange = ({ target }) => {
        onChange(target.value);
    }

    return (
        <div>
            <label htmlFor={id} className={ labelStyle ? labelStyle : `block text-sm font-medium leading-6 text-gray-900`}>
                {lableText}
            </label>
            <div>
                <input
                    id={id}
                    type={type}
                    required
                    value={value}
                    placeholder={placeholder}
                    onChange={handleInputChange}
                    className={ inputStyle ? inputStyle : `
                        block w-full rounded-md border-0
                        px-2 py-1.5 text-gray-900 shadow-sm
                        placeholder:text-gray-400 focus:outline-none
                        placeholder:text-sm
                    `}
                />
            </div>
            <label htmlFor={id} className={`${ errorStyle ? errorStyle : 'mt-1 block text-xs font-thin leading-3 text-red-600' } ${!error ? 'hidden' : ''}`}>
                {error}
            </label>
        </div>
    )
}