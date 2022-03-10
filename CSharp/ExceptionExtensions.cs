   public static class ExceptionExtensions
    {
        /// <summary>
        /// Check any object for null and throw exception if so.
        /// </summary>
        /// <param name="obj">The object to check</param>
        /// <param name="message">The error message</param>
        /// <exception cref="ArgumentNullException"></exception>
        public static void ThrowIfNull(this object obj, string message = null)
        {
            if (obj == null)
            {
                throw new ArgumentNullException(message);
            }
        }

        /// <summary>
        /// Check any object for null and throw exception if so.
        /// </summary>
        /// <param name="obj">The object to check</param>
        /// <param name="message">The error message</param>
        /// <exception cref="ArgumentNullException">Throws if null</exception>
        /// <exception cref="EmptyValueException">Throws if empty</exception>
        public static void ThrowIfNullOrEmpty(this Array array, string message = null)
        {
            array.ThrowIfNull();
            if (array.Length == 0)
            {
                throw new EmptyValueException(message);
            }
        }

        /// <summary>
        /// Check for null or empty and throw exception if so.
        /// </summary>
        /// <param name="obj">The object to check</param>
        /// <exception cref="ArgumentNullException">Throws if null</exception>
        /// <exception cref="EmptyValueException">Throws if empty</exception>
        public static void ThrowIfNullOrEmpty<T>(this IEnumerable<T> collection, string message = null)
        {
            collection.ThrowIfNull();
            if (collection.Any() == false)
            {
                throw new EmptyValueException(message);
            }
        }
    }
