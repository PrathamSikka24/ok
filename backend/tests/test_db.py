import unittest
from unittest.mock import patch, MagicMock
from db import get_db_connection

class TestDatabaseConnection(unittest.TestCase):

    @patch('mysql.connector.connect')
    def test_get_db_connection_success(self, mock_connect):
        mock_connect.return_value.is_connected.return_value = True
        conn = get_db_connection()
        self.assertTrue(conn.is_connected())

    @patch('mysql.connector.connect')
    def test_get_db_connection_failure(self, mock_connect):
        mock_connect.side_effect = Exception("Connection failed")
        conn = get_db_connection()
        self.assertIsNone(conn)

if __name__ == '__main__':
    unittest.main()
